import React from 'react';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionNumber: 1,
      lifeValue: 0,
      questionInputValue: 0,
      radioChecked: false
    }
  }

  render() {
    return (
      <div class="App">
        {this.renderQuestion(this.state.questionNumber)}
      </div>
    )
  }

  renderQuestion(number) {
    let question;

    if (number === 1) {
      question = this.question1();
    } else if (number === 2) {
      question = this.question2();
    } else if (number === 3) {
      question = this.question3();
    } else if (number === 4) {
      question = this.question4();
    } else if (number === 5) {
      question = this.question5();
    } else if (number === 6) {
      question = this.question6();
    } else if (number === 7) {
      question = this.question7();
    } else if (number === 8) {
      question = this.question8();
    } else if (number === 9) {
      question = this.question9();
    } else if (number === 10) {
      question = this.question10();
    } else if (number === 11) {
      question = this.answer();
    }

    return <div id="prompt">
      {question}
    </div>
  }

  incrementUser() {
    this.setState({
      ...this.state,
      questionNumber: this.state.questionNumber + 1,
      lifeValue: this.state.lifeValue + this.state.questionInputValue,
      questionInputValue: 0,
      radioChecked: false
    })
  }

  changeInputValue(inputValue) {
    this.setState({
      ...this.state,
      questionInputValue: parseInt(inputValue)
    })
  }

  question1() {
    return <div class="promptContainer">
      < p class="questionText"> How old are you?</p >
      <div class="inputsContainer">
        <div class="inputs">
          <input type="radio" id="20-29" name="age" value={4} onChange={(e) => this.changeInputValue(e.target.value)} checked={this.state.questionInputValue === 4} />
          <label for="20-29">20-29</label><br />
          <input type="radio" id="30-39" name="age" value={3} onChange={(e) => this.changeInputValue(e.target.value)} checked={this.state.questionInputValue === 3} />
          <label for="30-39">30-39</label><br />
          <input type="radio" id="40-49" name="age" value={2} onChange={(e) => this.changeInputValue(e.target.value)} checked={this.state.questionInputValue === 2} />
          <label for="40-49">40-49</label><br />
          <input type="radio" id="50-59" name="age" value={1} onChange={(e) => this.changeInputValue(e.target.value)} checked={this.state.questionInputValue === 1} />
          <label for="50-59">50-59</label>
          <br />
          <br />

          <button id="nextQuestion" onClick={() => this.incrementUser()} disabled={this.state.questionInputValue === 0}>
            {"Next question"}
          </button>
        </div>
      </div>
    </div >
  }

  question2() {
    return <div class="promptContainer">
      <p class="questionText">How much per month is your rent including bills?</p>
      <div class="inputsContainer">
        <div class="inputs">
          <input type="radio" id="0-500" name="rent" value={1} onChange={(e) => this.changeInputValue(e.target.value)} checked={this.state.questionInputValue === 1} />
          <label for="0-500">€0-€500</label><br />
          <input type="radio" id="501-1000" name="rent" value={2} onChange={(e) => this.changeInputValue(e.target.value)} checked={this.state.questionInputValue === 2} />
          <label for="501-1000">€501-€1000</label><br />
          <input type="radio" id="1001-1500" name="rent" value={3} onChange={(e) => this.changeInputValue(e.target.value)} checked={this.state.questionInputValue === 3} />
          <label for="1001--1500">€1001-€1500</label><br onChange={(e) => this.changeInputValue(e.target.value)} />
          <input type="radio" id="greater than 1500" name="rent" value={4} onChange={(e) => this.changeInputValue(e.target.value)} checked={this.state.questionInputValue === 4} />
          <label for="greater than 1500">greater than €1500</label>
          <br />
          <br />

          <button id="nextQuestion" onClick={() => this.incrementUser()} disabled={this.state.questionInputValue === 0}>
            {"Next question"}
          </button>
        </div>
      </div>
    </div>
  }

  question3() {
    return <div class="promptContainer">
      <p class="questionText">How long does it take you to cycle to school from your home?</p>
      <div class="inputsContainer">
        <div class="inputs">
          <input type="radio" id="5-10 minutes" name="cycle" value={3} onChange={(e) => this.changeInputValue(e.target.value)} checked={this.state.questionInputValue === 3} />
          <label for="5-10 minutes">5-10 minutes</label><br />
          <input type="radio" id="10-15 minutes" name="cycle" value={2} onChange={(e) => this.changeInputValue(e.target.value)} checked={this.state.questionInputValue === 2} />
          <label for="10-15 minutes">10-15 minutes</label><br />
          <input type="radio" id="more than 15 minutes" name="cycle" value={1} onChange={(e) => this.changeInputValue(e.target.value)} checked={this.state.questionInputValue === 1} />
          <label for="more than 15 minutes">more than 15 minutes</label><br />
          <input type="radio" id="I don’t cycle" name="cycle" value={4} onChange={(e) => this.changeInputValue(e.target.value)} checked={this.state.questionInputValue === 4} />
          <label for="I don’t cycle">I don’t cycle</label>
          <br />
          <br />

          <button id="nextQuestion" onClick={() => this.incrementUser()} disabled={this.state.questionInputValue === 0}>
            {"Next question"}
          </button>
        </div>
      </div>
    </div>
  }

  question4() {
    return <div class="promptContainer">
      <p class="questionText">How many hours per day on average do you spend at DAE?</p>
      <div class="inputsContainer">
        <div class="inputs">
          <input type="radio" id="0-3 hours" name="schoolTime" value={1} onChange={(e) => this.changeInputValue(e.target.value)} checked={this.state.questionInputValue === 1} />
          <label for="0-3 hours">0-3 hours</label><br />
          <input type="radio" id="3-6 hours" name="schoolTime" value={2} onChange={(e) => this.changeInputValue(e.target.value)} checked={this.state.questionInputValue === 2} />
          <label for="3-6 hours">3-6 hours</label><br />
          <input type="radio" id="6-9 hours" name="schoolTime" value={3} onChange={(e) => this.changeInputValue(e.target.value)} checked={this.state.questionInputValue === 3} />
          <label for="6-9 hours">6-9 hours</label><br />
          <input type="radio" id="9+ hours" name="schoolTime" value={4} onChange={(e) => this.changeInputValue(e.target.value)} checked={this.state.questionInputValue === 4} />
          <label for="9+ hours">9+ hours</label>
          <br />
          <br />

          <button id="nextQuestion" onClick={() => this.incrementUser()} disabled={this.state.questionInputValue === 0}>
            {"Next question"}
          </button>
        </div>
      </div>
    </div>
  }

  question5() {
    return <div class="promptContainer">
      <p class="questionText">How much do you spend per day on average at Z-bar?</p>
      <div class="inputsContainer">
        <div class="inputs">
          <input type="radio" id="less than 5 Euros" name="Zbar" value={1} onChange={(e) => this.changeInputValue(e.target.value)} checked={this.state.questionInputValue === 1} />
          <label for="less than 5 Euros">less than €5</label><br />
          <input type="radio" id="5-10 Euros" name="Zbar" value={2} onChange={(e) => this.changeInputValue(e.target.value)} checked={this.state.questionInputValue === 2} />
          <label for="5-10 Euros">€5-€10</label><br />
          <input type="radio" id="more than 10 Euros" name="Zbar" value={3} onChange={(e) => this.changeInputValue(e.target.value)} checked={this.state.questionInputValue === 3} />
          <label for="more than 10 Euros">more than €10</label><br />
          <input type="radio" id="I don't go to Z-bar" name="Zbar" value={4} onChange={(e) => this.changeInputValue(e.target.value)} checked={this.state.questionInputValue === 4} />
          <label for="I don't go to Z-bar">I don't go to Z-bar</label>
          <br />
          <br />

          <button id="nextQuestion" onClick={() => this.incrementUser()} disabled={this.state.questionInputValue === 0}>
            {"Next question"}
          </button>
        </div>
      </div>
    </div>
  }

  question6() {
    return <div class="promptContainer">
      <p class="questionText">How many years of full-time working experience do you have?</p>
      <div class="inputsContainer">
        <div class="inputs">
          <input type="radio" id="0-1 year" name="work experience" value={1} onChange={(e) => this.changeInputValue(e.target.value)} checked={this.state.questionInputValue === 1} />
          <label for="0-1 year">0-1 year</label><br />
          <input type="radio" id="1-2 years" name="work experience" value={2} onChange={(e) => this.changeInputValue(e.target.value)} checked={this.state.questionInputValue === 2} />
          <label for="1-2 years">1-2 years</label><br />
          <input type="radio" id="2-3 years" name="work experience" value={3} onChange={(e) => this.changeInputValue(e.target.value)} checked={this.state.questionInputValue === 3} />
          <label for="2-3 years">2-3 years</label><br />
          <input type="radio" id="more than 3" name="work experience" value={4} onChange={(e) => this.changeInputValue(e.target.value)} checked={this.state.questionInputValue === 4} />
          <label for="more than 3">3+ years</label>
          <br />
          <br />

          <button id="nextQuestion" onClick={() => this.incrementUser()} disabled={this.state.questionInputValue === 0}>
            {"Next question"}
          </button>
        </div>
      </div>
    </div>
  }

  question7() {
    return <div class="promptContainer">
      <p class="questionText">Out of the following, which workshop do you use the most?</p>
      <div class="inputsContainer">
        <div class="inputs">
          <input type="radio" id="wood" name="workshop" value={2} onChange={(e) => this.changeInputValue(e.target.value)} checked={this.state.questionInputValue === 2} />
          <label for="wood">wood</label><br />
          <input type="radio" id="metal" name="workshop" value={3} onChange={(e) => this.changeInputValue(e.target.value)} checked={this.state.questionInputValue === 3} />
          <label for="metal">metal</label><br />
          <input type="radio" id="ceramic" name="workshop" value={1} onChange={(e) => this.changeInputValue(e.target.value)} checked={this.state.questionInputValue === 1} />
          <label for="ceramic">ceramic</label><br />
          <input type="radio" id="plastic" name="workshop" value={4} onChange={(e) => this.changeInputValue(e.target.value)} checked={this.state.questionInputValue === 4} />
          <label for="plastic">plastic</label>
          <br />
          <br />

          <button id="nextQuestion" onClick={() => this.incrementUser()} disabled={this.state.questionInputValue === 0}>
            {"Next question"}
          </button>
        </div>
      </div>
    </div>
  }

  question8() {
    return <div class="promptContainer">
      <p class="questionText">Have you ever returned any of your library books late?</p>
      <div class="inputsContainer">
        <div class="inputs">
          <input type="radio" id="never" name="library" value={4} onChange={(e) => this.changeInputValue(e.target.value)} checked={this.state.questionInputValue === 4} />
          <label for="never">never</label><br />
          <input type="radio" id="once" name="library" value={3} onChange={(e) => this.changeInputValue(e.target.value)} checked={this.state.questionInputValue === 3} />
          <label for="once">once</label><br />
          <input type="radio" id="more than once" name="library" value={2} onChange={(e) => this.changeInputValue(e.target.value)} checked={this.state.questionInputValue === 2} />
          <label for="more than once">more than once</label><br />
          <input type="radio" id="I don't use the library" name="library" value={1} onChange={(e) => this.changeInputValue(e.target.value)} checked={this.state.questionInputValue === 1} />
          <label for="I don't use the library">I don't use the library</label>
          <br />
          <br />

          <button id="nextQuestion" onClick={() => this.incrementUser()} disabled={this.state.questionInputValue === 0}>
            {"Next question"}
          </button>
        </div>
      </div>
    </div>
  }

  question9() {
    return <div class="promptContainer">
      <p class="questionText">Do you use the 'Stairs to Go Up' to go down?</p>
      <div class="inputsContainer">
        <div class="inputs">
          <input type="radio" id="never" name="stairs up" value={2} onChange={(e) => this.changeInputValue(e.target.value)} checked={this.state.questionInputValue === 2} />
          <label for="never">never</label><br />
          <input type="radio" id="sometimes" name="stairs up" value={3} onChange={(e) => this.changeInputValue(e.target.value)} checked={this.state.questionInputValue === 3} />
          <label for="sometimes">sometimes</label><br />
          <input type="radio" id="regularly" name="stairs up" value={1} onChange={(e) => this.changeInputValue(e.target.value)} checked={this.state.questionInputValue === 1} />
          <label for="regularly">regularly</label>
          <br />
          <br />

          <button id="nextQuestion" onClick={() => this.incrementUser()} disabled={this.state.questionInputValue === 0}>
            {"Next question"}
          </button>
        </div>
      </div>
    </div>
  }

  question10() {
    return <div class="promptContainer">
      <p class="questionText">Do you wear your mask while moving around DAE?</p>
      <div class="inputsContainer">
        <div class="inputs">
          <input type="radio" id="always" name="mask" value={4} onChange={(e) => this.changeInputValue(e.target.value)} checked={this.state.questionInputValue === 4} />
          <label for="always">always</label><br />
          <input type="radio" id="most of the time" name="mask" value={3} onChange={(e) => this.changeInputValue(e.target.value)} checked={this.state.questionInputValue === 3} />
          <label for="most of the time">most of the time</label><br />
          <input type="radio" id="rarely" name="mask" value={2} onChange={(e) => this.changeInputValue(e.target.value)} checked={this.state.questionInputValue === 2} />
          <label for="rarely">rarely</label><br />
          <input type="radio" id="never" name="mask" value={1} onChange={(e) => this.changeInputValue(e.target.value)} checked={this.state.questionInputValue === 1} />
          <label for="never">never</label>
          <br />
          <br />

          <button id="nextQuestion" onClick={() => this.incrementUser()} disabled={this.state.questionInputValue === 0}>
            {"Submit"}
          </button>
        </div>
      </div>
    </div>
  }

  answer() {
    return <div class="result">
      {`You scored: ${this.state.lifeValue}`}
    </div>
  }
}