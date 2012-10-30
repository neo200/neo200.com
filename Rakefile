BUILD_DIR = 'build'
HOST = 'macba.in'
HOST_PATH = 'neo200.com'

desc "deploy"
task :deploy do
  puts "=== Building"
  puts `middleman build`

  puts "=== Uploading"
  puts `rsync -rv --delete #{BUILD_DIR}/ #{HOST}:~/#{HOST_PATH}`
end