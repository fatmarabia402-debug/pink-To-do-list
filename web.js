let btn = document.getElementById("btn")

let input = document.getElementById("input")

let list = document.getElementById("list")

let count = document.getElementById("count")

let num = 0


btn.onclick = function () {

    let text = input.value

    if (text == "") {

        alert("write task")

    }

    else {

        let li = document.createElement("li")

        let span = document.createElement("span")

        span.innerHTML = text

        li.appendChild(span)


        // delete button

        let del = document.createElement("button")

        del.innerHTML = "Delete"

        del.classList.add("del")

        li.appendChild(del)


        // add task

        list.appendChild(li)

        input.value = ""


        // counter

        num++

        count.innerHTML = "Tasks : " + num


        // complete task

        span.onclick = function () {

            span.classList.toggle("done")

        }


        // delete task

        del.onclick = function () {

            li.remove()

            num--

            count.innerHTML = "Tasks : " + num

        }

    }

}