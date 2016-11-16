/**
 * Created by echo on 16/11/14.
 */
// 引入 gulp及组件
var gulp    = require('gulp'),                 //基础库
    imagemin = require('gulp-imagemin'),       //图片压缩
    sass = require('gulp-ruby-sass'),          //sass
    minifycss = require('gulp-minify-css'),    //css压缩
    jshint = require('gulp-jshint'),           //js检查
    uglify  = require('gulp-uglify'),          //js压缩
    rename = require('gulp-rename'),           //重命名
    concat  = require('gulp-concat'),          //合并文件
    clean = require('gulp-clean'),             //清空文件夹
    tinylr = require('tiny-lr'),               //livereload
    server = tinylr(),
    port = 35729,
    livereload = require('gulp-livereload');   //livereload

//HTML 处理
gulp.task('html',function(){
    var htmlSrc = './views/**/*.html';
    var htmlDst = './dist/html';

    gulp.src(htmlSrc)
        .pipe(livereload(server))
        .pipe(gulp.dest(htmlDst))
});

//样式处理
gulp.task('css',function(){
    var cssSrc = './public/styles/sass/*.scss';
    var cssDst = './dist/css';

    return sass(cssSrc, {
        style: 'compressed',
        //loadPath: ['./dist/css']
    })
        .pipe(gulp.dest(cssDst));
});

//图片处理
gulp.task('images',function(){
    gulp.src('./public/images/**/*')
        .pipe(imagemin())
        .pipe(livereload(server))
        .pipe(gulp.dest('./dist/images'))
});

//js处理
gulp.task('js', function () {
    var jsSrc = './public/javascript/*.js',
        jsDst ='./dist/js';
    gulp.src(jsSrc)
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(concat('main.js'))
        .pipe(gulp.dest(jsDst))
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(livereload(server))
        .pipe(gulp.dest(jsDst));
});

//清空图片、样式、js
gulp.task('clean',function(){
    gulp.src(['./dist/css','./dist/images','./dist/html'],{read:false})
        .pipe(clean());
});

//默认任务 清空图片、样式、js并重建 运行语句 gulp
gulp.task('default',[clean],function(){
    gulp.start('html','css','js','images');
});

//监听任务
gulp.task('watch',function(){
    server.listen(port,function(err){
        if(err){
            return console.log(err);
        }

        //监听html
        gulp.watch('./views/**/*.html',function(event){
            gulp.run('html');
        });

        //监听css
        gulp.watch('./public/styles/sass/*.scss',function(){
            gulp.run('css');
        });

        //监听images
        gulp.watch('./public/images/**/*',function(){
            gulp.run('images');
        });

        //监听js
        gulp.watch('./public/javascript/**/*.js',function(){
            gulp.run('js');
        });
    })
});