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
        sh 'rm -rf /usr/share/nginx/html'
        sh 'cp -rf ./dist/ /usr/share/nginx/html'
        sh 'systemctl start nginx.service'
      }
    }
    stage('Deploy') {
      steps {
        sh 'scp -i /root/.ssh/ooclserver_rsa -r ./dist root@39.98.219.194:/usr/local/bin/'
        sh 'ssh -i /root/.ssh/ooclserver_rsa root@39.98.219.194 "cp -rf /usr/local/bin/dist/* /usr/share/nginx/html/"'
      }
    }
  }
}
