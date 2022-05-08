
#!/usr/bin/env bash
echo "registry=https://pkgs.dev.azure.com/${ORG_NAME}/_packaging/${FEED_NAME}/npm/registry/
always-auth=true
; begin auth token
//pkgs.dev.azure.com/${ORG_NAME}/_packaging/Feed/npm/registry/:username=${BUILD_QUEUEDBYID}
//pkgs.dev.azure.com/${ORG_NAME}/_packaging/Feed/npm/registry/:_password=${PERSONAL_ACCESS_TOKEN}
//pkgs.dev.azure.com/${ORG_NAME}/_packaging/Feed/npm/registry/:email=${BUILD_REQUESTEDFOREMAIL}
//pkgs.dev.azure.com/${ORG_NAME}/_packaging/Feed/npm/:username=${BUILD_QUEUEDBYID}
//pkgs.dev.azure.com/${ORG_NAME}/_packaging/Feed/npm/:_password=${PERSONAL_ACCESS_TOKEN}
//pkgs.dev.azure.com/${ORG_NAME}/_packaging/Feed/npm/:email=${BUILD_REQUESTEDFOREMAIL}
; end auth token
" >> .npmrc 


