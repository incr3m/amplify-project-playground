# install backend/functions dependencies
yarn install --cwd ../

export ENV="dev"
export REGION="ap-southeast-2"

export TEST="true"
export AWS_PROFILE="mb-trainee"
echo $NODE_PATH
# npx jest --coverage
npx jest --coverage $@