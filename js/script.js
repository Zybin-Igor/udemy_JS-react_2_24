//1.Вывести числа от 654 до 0 на экран.
// let out = document.getElementById("out");
// let str = "";
// for (let i=654; i>=0; i=i-1){
//  str = str + i + " ";
// }
// out.innerHTML = str;
// let out = document.getElementById("out");
// let number = 654;
// let str = "";
// while(number >= 0) {
//  str +=number + " ";
//  number--;
// }
// Интересный ввод вместо console.log (// process.stdout.write(number + " ");)
/*Задание на урок
1) Автоматизировать вопросы пользователю про фильмы при помощи цикла
2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки, отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит-возваращаем пользователя к вопросам опять.(К любой строке можно обратиться как str.length - и получить ее длину)
3) При помощи условий проверить personalMovieDB.count, и если он меньше 10 - вывести сообщение "Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы класический зритель"б а если больше - "Вы киноман". А если не пошло ни к одному варианту - "Произошла ошибка"
4) Потренироваться и переписать цикл еще двумя способами*/
"user strict";
/*Ответы */
const numberOfFilms = +prompt("Combien de films avez-vous déjà regardé ?");
const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

for (let i = 0; i < 2; i++) {
	const a = prompt("Un des derniers films que vous avez regardé ?", " "), 
		b = prompt("Comment jugez-vous ce film ?", " ");
	if (a != null && b != null && a != "" && a != " " && b != "" && b != " " && a.length < 50) {
		personalMovieDB.movies[a] = b;
		console.log("done");
	}else {
		console.log("error");
		i--;
	}
}
if (personalMovieDB.count < 10) {
	console.log("Peu de films regardés");
}else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
	console.log ("Vous êtes un spectateur classique de tant de films.");
} else if (personalMovieDB.count >= 30) {
	console.log("Vous êtes un vrai cinéphile.");
}
console.log(personalMovieDB);
// Функция prompt
// let name = prompt("Как твое имя?", " ");
// alert(`Твое имя ${name}!`); // Твое имя name!
