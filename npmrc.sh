
#!/usr/bin/env bash
echo "${PACKAGE_SCOPE}/registry=https://pkgs.dev.azure.com/${ORG_NAME}/${PROJECT_NAME}/_packaging/${FEED_NAME}/npm/registry/
/registry.npmjs.org/:_authToken=${NPM_TOKEN}
always-auth=true
; begin auth token
//pkgs.dev.azure.com/${ORG_NAME}/_packaging/${FEED_NAME}/npm/registry/:username=radius2
//pkgs.dev.azure.com/${ORG_NAME}/_packaging/${FEED_NAME}/npm/registry/:_password=${PERSONAL_ACCESS_TOKEN}
//pkgs.dev.azure.com/${ORG_NAME}/_packaging/${FEED_NAME}/npm/registry/:email=${BUILD_REQUESTEDFOREMAIL}
//pkgs.dev.azure.com/${ORG_NAME}/_packaging/${FEED_NAME}/npm/:username=radius2
//pkgs.dev.azure.com/${ORG_NAME}/_packaging/${FEED_NAME}/npm/:_password=${PERSONAL_ACCESS_TOKEN}
//pkgs.dev.azure.com/${ORG_NAME}/_packaging/${FEED_NAME}/npm/:email=${BUILD_REQUESTEDFOREMAIL}
; end auth token
" >> .npmrc 


