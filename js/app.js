function getFoxImage() {
    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let fImage = JSON.parse(this.responseText);
            console.log(fImage.image);
            document.getElementById("foxImg").innerHTML = fImage.image;
        }
        else if (this.readyState != 4) {
            document.getElementById("foxImg").innerHTML = "Loading"
        }
        else {
            document.getElementById("foxImg").innerHTML = "Something went wrong!"

        }

    }
    ajax.open("GET", "https://randomfox.ca/floof/", true);
    ajax.send();
}

document.getElementById("anotherFoxImg").addEventListener("click", getFoxImage);
