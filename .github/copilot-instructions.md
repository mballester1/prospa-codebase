# Prospa Mobile App - AI Coding Agent Instructions

## Project Overview

This is a React Native mobile app for Prospa's financial services platform, targeting iOS and Android. The app handles business accounts, loans, lines of credit, card management, and payment processing for Australian and New Zealand markets.

## Key Architecture Patterns

### Service-Based Architecture

- **Dependency Injection**: Services are instantiated in `src/App.tsx` and passed through React Navigation props (not React Context)
- **Service Layer**: All business logic lives in `src/services/` with interfaces in service directories
- **Example**: `AppService`, `CacheService`, `BiometricsService`, `PushProvisioningService` are injected into screen controllers

### Navigation Structure

- **Screen Pattern**: `Controller` (business logic) + `View` (UI) separation
- **Navigation Props**: Services are passed via `{...services}` spread to all screen controllers
- **Type Safety**: Screen params defined in `src/Navigator/Screens.ts` with strict typing
- **Deep Linking**: Extensive deep link support with dedicated handlers in Navigator

### GraphQL Integration

- **Code Generation**: Run `npm run generate` to generate types from GraphQL schema
- **Apollo Client**: Configured in `src/createApolloClient.tsx` with auth, retry, and error handling
- **Query Hooks**: Use `useApolloQuery`, `useApolloMutation`, `useApolloLazyQuery` from `src/hooks/useApolloHandler.tsx` for consistent error handling
- **Schema Location**: Generated types in `src/generated/frontend-gateway/`

### Context vs Services

- **React Contexts**: Used for app-wide state (SessionProvider, LoaderProvider, ModalProvider)
- **Services**: Used for business logic, API calls, and data persistence
- **Session Management**: User identity and authentication state in `SessionProvider`

## Essential Development Workflows

### Environment Setup

```bash
# Required: Node 20, install MeaWallet credentials from LastPass
export NEXUS_USER=ext-react-native-mpp
export NEXUS_PASSWORD={from LastPass: MeaWallet Nexus credentials}
./bin/installMeawallet.sh

# Fresh install
npm run fresh  # Installs gems + dependencies + MeaWallet

# GraphQL type generation
npm run generate  # Requires FRONTEND_GATEWAY_INTROSPECTION_KEY in .env.dev
```

### Testing Strategy

- **Unit Tests**: Jest with React Native Testing Library
- **E2E Tests**: Maestro flows in `e2e-tests/.maestro/`
- **Coverage**: `npm run test:cov -- --coverage .`
- **Mock Strategy**: Extensive mocks in `__tests__/setup.ts` and `src/contexts/__mocks__/`

### Build Process

- **iOS**: `bundle exec pod install` from ios/ directory with `npm_config_mpp_env=prod`
- **Staging Builds**: Azure DevOps pipeline with `IS_STAGING_BUILD=true` variable
- **Fastlane**: Handles staging/production builds (`fastlane ios buildStaging`)

## Critical Integration Points

### External Dependencies

- **MeaWallet**: Card provisioning SDK with private NPM registry (requires credentials)
- **Tap-to-Pay**: Custom module in `modules/react-native-tap-sdk/`
- **Braze**: Analytics and push notifications
- **Sentry**: Error tracking with custom correlation IDs
- **ConfigCat**: Feature flags

### Security & Compliance

- **Biometrics**: Touch/Face ID integration via `BiometricsService`
- **Token Management**: JWT tokens stored in Keychain via `KeychainTokenStorage`
- **Privacy Screen**: Automatic content hiding when app backgrounds

### Data Flow Patterns

- **API Responses**: Wrapped in `ApiService.ApiResponse<T, E>` pattern
- **Cache Layer**: `CacheService` with AsyncStorage and in-memory fallbacks
- **Error Handling**: Centralized via `useApolloHandler` hooks with modal presentation
- **Loading States**: Global `LoaderProvider` context for app-wide spinners

## Project-Specific Conventions

### File Organization

- **Screen Controllers**: `src/screens/{domain}/{feature}/{Feature}Controller.tsx`
- **Services**: `src/services/{domain}/{ServiceName}.ts` with corresponding interface
- **Generated Code**: Never edit `src/generated/` - regenerate via `npm run generate`
- **Components**: Reusable UI in `src/components/` with domain-specific organization

### TypeScript Patterns

- **Screen Props**: Use `NativeStackScreenProps<ScreenParamsList, 'screenName'>`
- **Service Interfaces**: Define interfaces alongside implementations for testability
- **Generated Types**: Import from `src/generated/frontend-gateway/graphql`

### Environment Configuration

- **Config Service**: `AppConfigService` reads from react-native-config
- **Multi-environment**: Development/staging/production with different API endpoints
- **Country Support**: AU/NZ markets with localized URLs and features

## Common Debugging Commands

```bash
# Clean build issues
./bin/clean.sh

# Reset Metro cache
npm start -- --reset-cache

# iOS simulator specific device
npm run ios:16max

# Run specific test
npm test -- --testNamePattern="specific test"

# E2E test single flow
cd e2e-tests && maestro test .maestro/specific-flow.yaml
```

## Key Files to Reference

- `src/Navigator/Navigator.tsx` - Screen routing and service injection
- `src/Navigator/Screens.ts` - Screen parameter type definitions
- `src/createApolloClient.tsx` - GraphQL client configuration
- `src/services/app-service/AppService.ts` - Core authentication logic
- `src/contexts/SessionProvider.tsx` - User session management
- `codegen.ts` - GraphQL code generation configuration

Remember: This app serves financial customers, so prioritize security, error handling, and user data protection in all implementations.
