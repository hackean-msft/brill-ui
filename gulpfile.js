var gulp = require("gulp")
var browserSync = require("browser-sync").create()

gulp.task("serve", ["copy-html", "copy-assets", "copy-app"], function() {
	browserSync.init({
		server: "./dist"
	});

	gulp.watch("./index.html", ["copy-html", "copy-app", "copy-assets"]);
	gulp.watch("*.html").on("change", browserSync.reload);
});

gulp.task("copy-html", function() {
	gulp.src("./index.html")
		.pipe(gulp.dest("./dist"));
});

gulp.task("copy-assets", function(){
	gulp.src("./assets/**")
		.pipe(gulp.dest("./dist/assets"))
})

gulp.task("copy-app", function(){
	gulp.src("./app/**")
		.pipe(gulp.dest("./dist/app"))
})
