pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'cnpm install'
        sh 'npm run build'
      }
    }
    stage('Test') {
      steps {
        sh 'systemctl stop nginx.service'
        sh 'rm  -rf /usr/share/nginx/html/*'
        sh 'mv -f ./dist/* /usr/share/nginx/html/'
        sh 'systemctl start nginx.service'
        input(message: 'It\'s ok to deploy?', ok: 'ok')
      }
    }
    stage('Deploy') {
      steps {
        sh 'ssh root@39.98.219.194 "mv -f /usr/local/bin/dist/* /usr/share/nginx/html/"'
        sh 'scp -r ./dist/ root@39.98.219.194:/usr/local/bin/'
      }
    }
  }
}