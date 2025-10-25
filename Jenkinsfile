pipeline {
agent any

tools {
nodejs 'NodeJS' // Make sure 'Node20' matches the name in your Jenkins NodeJS configuration
}

parameters {
string(name: 'BRANCH_NAME', defaultValue: 'main', description: 'Branch to build')
string(name: 'BUILD_ENV', defaultValue: 'dev', description: 'Environment for build')
}

environment {
NEW_VERSION = "1.1.0"
}

stages {
stage('Checkout') {
steps {
echo "Checking out branch: ${params.BRANCH_NAME}"
checkout scm
}
}

stage('Install Dependencies') {
  steps {
    echo 'Installing project dependencies...'
    bat 'npm ci'    // use 'bat' for Windows agents; if Linux, replace with 'sh'
  }
}

stage('Run Tests') {
  steps {
    echo 'Running Jest test cases...'
    bat 'npm test'
  }
}

stage('Build') {
  steps {
    echo "Building version ${env.NEW_VERSION} on branch ${params.BRANCH_NAME}"
  }
}

stage('Deploy') {
  steps {
    echo "Deploying application to ${params.BUILD_ENV} environment..."
  }
}


}

post {
always {
echo 'Cleaning up workspace...'
}
success {
echo '✅ Pipeline executed successfully.'
}
failure {
echo '❌ Pipeline failed.'
}
}
}
