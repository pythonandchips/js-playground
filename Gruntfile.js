module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    connect: {
      server: {
        port: 8000,
        base: '.',
        keepalive: true
      }
    },
    watch: {
      browserify: {
        files: ['src/**/*', 'index.html'],
        tasks: ['browserify'],
        options: {
          livereload: true
        }
      },
    },
    browserify: {
      'build/index.js': ['src/**/*.coffee', 'src/**/*.hbs'],
      options: {
        transform: ['coffeeify', 'hbsfy'],
        debug: true,
        shim: {
          jquery: {
            path: 'src/lib/jquery.js',
            exports: '$'
          }
        }
      }
    }
  })

  var pkg = grunt.file.readJSON('package.json');
  for(var dep in pkg.devDependencies) {
    if(dep.indexOf('grunt-') === 0) {
      grunt.loadNpmTasks(dep);
    }
  }
}
