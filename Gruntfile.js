module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
//    connect: {
//      server: {
//        port: 8000,
//        base: '.',
//        keepalive: true
//      }
//    },
//    watch: {
//      browserify: {
//        files: ['src/**/*', 'index.html'],
//        tasks: ['browserify:main'],
//        options: {
//          livereload: true
//        }
//      },
//      test: {
//        files: ['src/**/*', 'index.html'],
//        tasks: ['browserify:test', 'jasmine'],
//        options: {
//          livereload: true
//        }
//      },
//    },
    browserify: {
      frontend: {
        src: ['src/**/*.coffee', 'src/**/*.hbs'],
        dest: 'build/index.js',
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
      },
      karma: {
        dest: 'spec/specs-bundle.js',
        src: ['spec/**/*.coffee'],
        options: {
          transform: ['coffeeify'],
          debug: false,
          multifile: true,
          shim: {
            jquery: {
              path: 'src/lib/jquery.js',
              exports: '$'
            }
          }
        }
      }
    },
    karma: {
      unit: {
        configFile: 'karma.conf.js',
        background: true
      }
    }
  })

  grunt.registerTask('server', ['connect:server:keepalive'])
  grunt.registerTask('test', ['browserify', 'karma:unit:run'])

  var pkg = grunt.file.readJSON('package.json');
  for(var dep in pkg.devDependencies) {
    if(dep.indexOf('grunt-') === 0) {
      grunt.loadNpmTasks(dep);
    }
  }
}
