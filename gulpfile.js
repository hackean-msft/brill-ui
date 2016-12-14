var gulp = require("gulp")
var browserSync = require("browser-sync").create()

gulp.task("serve", ["copy-html", "copy-assets", "copy-app", "copy-css", "copy-bower"], function() {
	browserSync.init({
		server: "./dist"
	});

	gulp.watch("./index.html", ["copy-html"]);
	gulp.watch("app/**", ["copy-app"])
	gulp.watch("css/**", ["copy-css"])
	gulp.watch("bower_components/**", ["copy-bower"])
	gulp.watch("*.html").on("change", browserSync.reload);
});

gulp.task("copy-html", function() {
	gulp.src("./index.html")
		.pipe(gulp.dest("./dist"));
});

gulp.task("copy-assets", function(){
	gulp.src("./assets/**")
		.pipe(gulp.dest("./dist/assets"))
});

gulp.task("copy-app", function(){
	gulp.src("./app/**")
		.pipe(gulp.dest("./dist/app"))
})

gulp.task("copy-css", function(){
	gulp.src("./css/**")
		.pipe(gulp.dest("./dist/css"))
})

gulp.task("copy-bower", function() {
	gulp.src("./bower_components/**")
		.pipe(gulp.dest("./dist/bower_components"))
})
