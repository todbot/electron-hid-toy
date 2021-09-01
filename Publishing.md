

## MacOS Signed Apps:

- Must use "Developer ID" cert, not "Developer" or "Distribution".
  See:https://stackoverflow.com/a/65024719/221735

- See your certs: https://developer.apple.com/account/resources/certificates/list

- If you don't see a "Developer ID" cert in Keychain / My Certs, regenerate one,
  and install it into the Keychain.

- Export the cert from Keychain as described here:
  https://www.electron.build/code-signing#how-to-export-certificate-on-macos
  You will choose a password for the exported cert

- Set the CSC_LINK and CSC_KEY_PASSWORD with path & passwd to exported cert
  
- Set the APPLEID, APPLEID_PASS, and TEAM_SHORT_NAME environment variables
  
- Run `yarn dist`
  
- Check notarization:
  `codesign --test-requirement="=notarized" --verify --verbose /path/to/executable.app`

- Check code sign:
  `codesign -vvvv -d /path/to/executable.app`


## Windows Signed Apps:

- Purchase CodeSigning cert, get .p12/.pfx file with password

- Set the CSC_LINK and CSC_KEY_PASSWORD with path & passwd to exported cert

- Run `yarn dist`

