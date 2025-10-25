pipeline {
agent any

tools {
nodejs 'NodeJS'
}

parameters {
string(name: 'BRANCH_NAME', defaultValue: 'main')
string(name: 'BUILD_ENV', defaultValue: 'dev')
string(name: 'STUDENT_NAME', defaultValue: 'your name') //provide your name here, no
name, no marks

}

environment {
APP_VERSION = "1.0.0"
}

stages {
stage('Install Dependencies') {
steps {
echo "Installing Node.js dependencies..."
bat "npm install"
}
}

stage('Build') {
steps {
echo 'Building Calculator App v${APP_VERSION} on branch
${params.BRANCH_NAME}';
}
}

stage('Unit Test') {
when {
expression { return params.BUILD_ENV == 'dev' }
}

steps {
echo 'Running unit tests with Jest...'
bat "npm test"
}
}

stage('Deploy') {
steps {
echo 'Simulating deployment of Node.js Calculator App...'
}
}
}

post {
always {
echo 'Cleaning up workspace...'
// deleteDir()
}
success {
echo 'Pipeline executed successfully.'
}
failure {
echo 'Pipeline failed.'
}
}
}
