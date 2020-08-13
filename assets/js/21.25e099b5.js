(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{370:function(a,s,e){"use strict";e.r(s);var t=e(43),n=Object(t.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"docker-cheatsheet"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-cheatsheet"}},[a._v("#")]),a._v(" Docker Cheatsheet")]),a._v(" "),e("hr"),a._v(" "),e("h2",{attrs:{id:"description-some-useful-docker-commands"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description-some-useful-docker-commands"}},[a._v("#")]),a._v(" description: Some useful docker commands")]),a._v(" "),e("h1",{attrs:{id:"docker-cheatsheet-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-cheatsheet-2"}},[a._v("#")]),a._v(" Docker Cheatsheet")]),a._v(" "),e("p",[a._v("Some useful docker commands")]),a._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#docker"}},[a._v("Docker")])]),a._v(" "),e("li",[e("a",{attrs:{href:"#docker-compose"}},[a._v("Docker Compose")])]),a._v(" "),e("li",[e("a",{attrs:{href:"#docker-machine"}},[a._v("Docker Machine")]),a._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#create-new-server"}},[a._v("Create new server")])]),a._v(" "),e("li",[e("a",{attrs:{href:"#update"}},[a._v("Update")])]),a._v(" "),e("li",[e("a",{attrs:{href:"#see-logs"}},[a._v("See Logs")])]),a._v(" "),e("li",[e("a",{attrs:{href:"#remove-server"}},[a._v("Remove server")])])])])]),a._v(" "),e("h2",{attrs:{id:"docker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[a._v("#")]),a._v(" Docker")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Create")]),a._v("\ndocker build -t appname "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Start")]),a._v("\ndocker run appname\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# List all containers")]),a._v("\ndocker "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("ps")]),a._v(" -a -q\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Stop all containers")]),a._v("\ndocker stop "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("docker "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("ps")]),a._v(" -a -q"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Kill all containers")]),a._v("\ndocker "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("kill")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("docker "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("ps")]),a._v(" -q"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Remove all containers")]),a._v("\ndocker "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("docker "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("ps")]),a._v(" -a -q"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Remove all docker images")]),a._v("\ndocker rmi "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("docker images -q"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Prune all volumes")]),a._v("\ndocker system prune -a -f --volumes\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Enter into interative command line for a given container with environment variables loaded.")]),a._v("\ndocker "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exec")]),a._v(" -it CONTAINER_NAME "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sh")]),a._v("\n")])])]),e("h3",{attrs:{id:"cleanup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cleanup"}},[a._v("#")]),a._v(" Cleanup")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# delete volumes")]),a._v("\ndocker volume "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("docker volume "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v(" -qf "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("dangling")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("true"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("## remove docker images")]),a._v("\ndocker volume "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("docker volume "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v(" -f "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'dangling=true'")]),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# remove images without tag")]),a._v("\ndocker images "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"none"')]),a._v("\ndocker rmi "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("docker images "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"none"')]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("awk")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'/ / { print "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$3")]),a._v(" }'")]),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("\n")])])]),e("h3",{attrs:{id:"using-secrets-for-building-an-image"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-secrets-for-building-an-image"}},[a._v("#")]),a._v(" Using secrets for building an image")]),a._v(" "),e("p",[a._v("Example: I want to clone a private github repo and do a dev install inside the image.")]),a._v(" "),e("p",[a._v("I need a github access token for that.")]),a._v(" "),e("ol",[e("li",[a._v("Get a github access token and store it in "),e("code",[a._v("~/.bash_profile")])])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("GITHUB_TOKEN")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"12345"')]),a._v("\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[a._v("In the Dockerfile, access the token through "),e("code",[a._v("ARG")])])]),a._v(" "),e("div",{staticClass:"language-docker extra-class"},[e("pre",{pre:!0,attrs:{class:"language-docker"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ARG")]),a._v(" github_token\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("RUN")]),a._v(" git config "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("global url."),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"https://${github_token}:@github.com/"')]),a._v(".insteadOf "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"https://github.com/"')]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("RUN")]),a._v(" git clone https"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("//github.com/<user_name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")]),a._v("/<repo_name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")]),a._v(".git\n")])])]),e("ol",{attrs:{start:"3"}},[e("li",[a._v("Feed "),e("code",[a._v("docker build")]),a._v(" with the environment variable.")])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("docker build --build-arg "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("github_token")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$GITHUB_TOKEN")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n")])])]),e("h2",{attrs:{id:"docker-compose"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose"}},[a._v("#")]),a._v(" Docker Compose")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Start")]),a._v("\ndocker-compose up\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Start detached")]),a._v("\ndocker-compose up -d\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# List")]),a._v("\ndocker-compose "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("ps")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Rebuild")]),a._v("\ndocker-compose up --force-recreate --build\n")])])]),e("h2",{attrs:{id:"docker-machine"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-machine"}},[a._v("#")]),a._v(" Docker Machine")]),a._v(" "),e("h4",{attrs:{id:"create-new-server"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-new-server"}},[a._v("#")]),a._v(" Create new server")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Override default profile")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("AWS_ACCESS_KEY_ID")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("aws --profile PROFILE_NAME configure get aws_access_key_id"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("AWS_SECRET_ACCESS_KEY")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("aws --profile PROFILE_NAME configure get aws_secret_access_key"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("\ndocker-machine create "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  --driver amazonec2 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  --amazonec2-region ap-southeast-1 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  --amazonec2-open-port "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("3001")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  --amazonec2-access-key "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$AWS_ACCESS_KEY_ID")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  --amazonec2-secret-key "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$AWS_SECRET_ACCESS_KEY")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  --amazonec2-instance-type t2.nano "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  machine-name\n\ndocker-machine "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# check that it exists")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("eval")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("docker-machine "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("env")]),a._v(" machine-name"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# attach to machine")]),a._v("\ndocker-compose up -d "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# deploy on machine")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("eval")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("docker-machine "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("env")]),a._v(" -u"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v('"')]),a._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# attach to local again")]),a._v("\n")])])]),e("h4",{attrs:{id:"update"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#update"}},[a._v("#")]),a._v(" Update")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("eval")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("docker-machine "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("env")]),a._v(" machine-name"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("   "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# attach to machine")]),a._v("\ndocker-compose build --no-cache           "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# deploy on machine")]),a._v("\ndocker-compose up -d                      "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# make sure it's up and reloads config")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("eval")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("docker-machine "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("env")]),a._v(" -u"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v('"')]),a._v("           "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# attach to local again")]),a._v("\n")])])]),e("p",[a._v("This will destroy the redis instance: "),e("code",[a._v("docker-compose up --force-recreate")])]),a._v(" "),e("h4",{attrs:{id:"see-logs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#see-logs"}},[a._v("#")]),a._v(" See Logs")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("eval")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("docker-machine "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("env")]),a._v(" machine-name"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# attach to machine")]),a._v("\ndocker "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("ps")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# see list of machines")]),a._v("\ndocker logs __ID__ "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# see logs")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("eval")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("docker-machine "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("env")]),a._v(" -u"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v('"')]),a._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# attach to local again")]),a._v("\n")])])]),e("h4",{attrs:{id:"remove-server"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#remove-server"}},[a._v("#")]),a._v(" Remove server")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[a._v("docker-machine "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" machine-name\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);