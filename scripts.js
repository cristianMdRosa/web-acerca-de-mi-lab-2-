document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".item");
    const modal = document.getElementById("myModal");
    const modalText = document.getElementById("modal-text");
    const modalImage = document.createElement("img");
    const span = document.getElementsByClassName("close")[0];

    const info = {
        animal: {
            text: "Perro",
            image: "https://blog.myollie.com/wp-content/uploads/2020/02/beagle-puppy-running-through-a-yard-with-a-ball-in-his-mouth.jpg"
        },
        comida: {
            text: "Pizza",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrHlhatCIl5dyr4RzcF-SmjC3dmXy828Pp2Q&s"
        },
        pelicula: {
            text: "Harry Potter",
            image: "https://media.revistagq.com/photos/5eb13e411c7a78d7f484ced3/16:9/w_2560%2Cc_limit/harry-potter.png"
        },
        canciones: {
            text: "Valor de más de Ed Maverick",
            image: "https://gritaradio.com/wp-content/uploads/2024/11/Ed-Maverick-768x512.jpg"
        },
        admiro: {
            text: "Lionel Messi",
            image: "https://cdn.conmebol.com/wp-content/uploads/2023/06/000_334P84K-scaled.jpg"
        },
        pais: {
            text: "Japón",
            image: "https://one.cdnmega.com/images/viajes/covers/30197-japon-completo-1024x575_675b1c0ac365f.webp"
        }
    };

    items.forEach((item) => {
        item.addEventListener("click", function () {
            
            alert("Has hecho clic en el cuadro de: " + item.id);  

            modalText.textContent = info[item.id].text;
            modalImage.src = info[item.id].image;
            modalImage.alt = "Imagen de " + item.id;

            modalImage.style.maxWidth = "25%";
            modalImage.style.maxHeight = "25%";
            modalImage.style.height = "auto";
            modalImage.style.objectFit = "contain";

            modal.appendChild(modalImage);
            modal.style.display = "block";
        });

        item.addEventListener("mouseenter", function () {
            item.style.backgroundColor = "#2ecc71";
        });

        item.addEventListener("mouseleave", function () {
            item.style.backgroundColor = "#3498db";
        });

        item.addEventListener("dblclick", function () {
            item.style.fontSize = "22px";
        });

        item.addEventListener("contextmenu", function (event) {
            event.preventDefault();
            item.style.backgroundColor = "#e74c3c";
        });

        item.addEventListener("mouseover", function () {
            item.style.transform = "rotate(5deg)";
        });

        item.addEventListener("mouseout", function () {
            item.style.transform = "rotate(0deg)";
        });
    });

    span.onclick = function () {
        modal.style.display = "none";
        modal.removeChild(modalImage);
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
            modal.removeChild(modalImage);
        }
    }
});
