const form = document.getElementById("contactForm");

const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const data = {

        name: document.getElementById("name").value,

        email: document.getElementById("email").value,

        message: document.getElementById("message").value

    };

    try {https:

        const response = await fetch("https://portfolio-4g27.vercel.app/", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(data)

        });

        const result = await response.json();

        successMessage.innerText = result.message;

        form.reset();

    }

    catch (error) {

        console.log(error);

        successMessage.innerText = "Something went wrong";

    }

});