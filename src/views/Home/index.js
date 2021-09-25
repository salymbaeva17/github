import React, {useState} from 'react';
import {useHistory} from "react-router-dom";

const Home = () => {
    const [username, setUsername] = useState("")
    const history = useHistory()
    const handleChange = (e) => {
        setUsername(e.target.value)
    }
    const handlePress = (e) => {
        if (e.key === "Enter" && username.trim()) {
           handleClick()
        }
    }
    const handleClick = () =>{
        username.trim() && history.push(`/${username}`)
    }

    let TxtRotate = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtRotate.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 300 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }

        setTimeout(function() {
            that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('txt-rotate');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-rotate');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
                new TxtRotate(elements[i], JSON.parse(toRotate), period);
            }
        }
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
        document.body.appendChild(css);
    };
    return (
        <div className="homepage w-100 vh-100">
            <h1 className="text-light mb-3">GitHub
                <span
                    className="txt-rotate ms-2 "
                    data-period="2000"
                    data-rotate='[ "search", "search is simple", "search is fun!" ]'/>
            </h1>
            <div className="w-25 input-group mb-3">

                <input type="text" onChange={handleChange} onKeyPress={handlePress} className="form-control"
                       placeholder="Enter username" aria-describedby="button-addon2"/>
                <button className="btn btn-success" onClick={handleClick} type="button" id="button-addon2">Search</button>
            </div>
        </div>
    )
}

export default Home