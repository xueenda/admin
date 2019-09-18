pipeline {
  agent {
    node {
      label 'test node'
    }

  }
  stages {
    stage('Hello') {
      steps {
        echo 'Hello World'
      }
    }
    stage('Git Pull') {
      steps {
        git(url: 'https://github.com/xueenda/admin.git', branch: 'master')
      }
    }
    stage('Build') {
      steps {
        sh '''cd admin
npm install
npm run build:prod'''
      }
    }
  }
  environment {
    env = 'production'
  }
}