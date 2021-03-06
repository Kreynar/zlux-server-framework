# Zlux Server Framework Changelog

All notable changes to the Zlux Server Framework package will be documented in this file.
This repo is part of the app-server Zowe Component, and the change logs here may appear on Zowe.org in that section.

## 1.19.0

- Increased default retry attempts to connect to api discovery server from 3 to 100, for a total retry duration of a little over 15 minutes.

## 1.17.0

- Add support for DER encoded X.509 certificates

## 1.16.0

- [D] Feature: Expose GET /server/environment endpoint with minimal data when RBAC is off, to share only environment details that are required to do dependency checks and more accurate server-to-server communication (#237)
- Add support for PKCS#12 certificates and certificate authorities
- Enhancement: Added JSON plugin environment checks for App server and Agent components that verify if plugin requirements, specified in
the plugin definition, for OS, CPU, endpoints are satisfied.

## 1.15.0

- Bugfix: Fixed desktop prompting for session renewal and failure due to sso-auth plugin incorrectly stating that session refresh is possible when using Zowe SSO. In reality, the SSO tokens are non-renewable with expiration after several hours, leading to a prompt to re-authenticate to continue using the Desktop. This bugfix should now allow for that behavior.

## 1.14.0

- Bugfix: Plugin default server config could not exist in plugins own directory, and had to exist in the instance
- Bugfix: Terminal handlers had to exist within the root directory, rather than also being possible to exist within the instance directory
- Bugfix: Support more config parameters as env vars for edge case characters *, ., and _
- Bugfix: Fix for regression where session would expire prematurely because app server would not request a refresh from ZSS
- [A][D] Bugfix: RBAC checks will now use the Zowe instance value present in instance.env, when it is non-default (For compatibility; RBAC was defaulting to a different value from instance.env)
- Server will now load recognizers & actions from appDir/config/recognizers or /actions into the config

## 1.12.0

- Bugfix: Server handles if implementationDefaults or mediationLayer objects are missing
- Bugfix: SSH connecting from terminal-proxy was very slow on node v12+
- Bugfix: Lease info for mediation layer was a value that caused periodic heartbeat failure
- Add ability to state where a plugin path is relative to, instead of just where the server is running.
- Bugfix: Logout now allows security plugins to clear cookies
- Removed tokenInjector from sso-auth, since when SSO is being used token injection logic is not needed anymore.
- Bugfix: When trying to dynamically load a plugin with unmet dependencies, the response from the server would hang
- Support for reading keys, certificates, and certificate authority content from SAF keyrings via safkeyring:// specification in the node.https configuration object
- App server will now reattempt to connect to zss if it doesn't initially

