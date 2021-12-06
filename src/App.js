import './App.css';

function App() {
  return (
    <div className="App">
      <form>
        <p>How old are you?</p>
        <input type="radio" id="20-29" name="age" value="20-29" />
        <label for="20-29">20-29</label><br />
        <input type="radio" id="30-39" name="age" value="30-39" />
        <label for="30-39">30-39</label><br />
        <input type="radio" id="40-49" name="age" value="40-49" />
        <label for="40-49">40-49</label><br />
        <input type="radio" id="50-59" name="age" value="50-59" />
        <label for="50-59">50-59</label>
        <br />

        <p>How much per month is your rent including bills?</p>
        <input type="radio" id="0-500" name="rent" value="0-500" />
        <label for="0-500">€0-€500</label><br />
        <input type="radio" id="501-1000" name="rent" value="501-1000" />
        <label for="501-1000">€501-€1000</label><br />
        <input type="radio" id="1001-1500" name="rent" value="1001-1500" />
        <label for="1001--1500">€1001-€1500</label><br />
        <input type="radio" id="greater than 1500" name="rent" value="greater than 1500" />
        <label for="greater than 1500">greater than €1500</label>
        <br />        
        
        <p>How long does it take you to cycle to school from your home?</p>
        <input type="radio" id="5-10 minutes" name="cycle" value="5-10 minutes" />
        <label for="5-10 minutes">5-10 minutes</label><br />
        <input type="radio" id="10-15 minutes" name="cycle" value="10-15 minutes" />
        <label for="10-15 minutes">10-15 minutes</label><br />
        <input type="radio" id="more than 15 minutes" name="cycle" value="more than 15 minutes" />
        <label for="more than 15 minutes">more than 15 minutes</label><br />
        <input type="radio" id="I don’t cycle" name="cycle" value="I don’t cycle" />
        <label for="I don’t cycle">I don’t cycle</label>
        <br />        
        
        <p>How many hours per day on average do you spend at DAE?</p>
        <input type="radio" id="0-3 hours" name="schoolTime" value="0-3 hours" />
        <label for="0-3 hours">0-3 hours</label><br />
        <input type="radio" id="3-6 hours" name="schoolTime" value="3-6 hours" />
        <label for="3-6 hours">3-6 hours</label><br />
        <input type="radio" id="6-9 hours" name="schoolTime" value="6-9 hours" />
        <label for="6-9 hours">6-9 hours</label><br />
        <input type="radio" id="9+ hours" name="schoolTime" value="9+ hours" />
        <label for="9+ hours">9+ hours</label>
        <br />        
        
        <p>How much do you spend per day on average at Z-bar?</p>
        <input type="radio" id="less than 5 Euros" name="Zbar" value="less than 5 Euros" />
        <label for="less than 5 Euros">less than €5</label><br />
        <input type="radio" id="5-10 Euros" name="Zbar" value="5-10 Euros" />
        <label for="5-10 Euros">€5-€10</label><br />
        <input type="radio" id="more than 10 Euros" name="Zbar" value="more than 10 Euros" />
        <label for="more than 10 Euros">more than €10</label><br />
        <input type="radio" id="I don't go to Z-bar" name="Zbar" value="I don't go to Z-bar" />
        <label for="I don't go to Z-bar">I don't go to Z-bar</label>
        <br />

        <p>How many years of full-time working experience do you have?</p>
        <input type="radio" id="0-1 year" name="work experience" value="0-1 year" />
        <label for="0-1 year">0-1 year</label><br />
        <input type="radio" id="1-2 years" name="work experience" value="1-2 years" />
        <label for="1-2 years">1-2 years</label><br />
        <input type="radio" id="2-3 years" name="work experience" value="2-3 years" />
        <label for="2-3 years">2-3 years</label><br />
        <input type="radio" id="more than 3" name="work experience" value="more than 3" />
        <label for="more than 3">3+ years</label>
        <br />


        <p>Out of the following, which workshop do you use the most?</p>
        <input type="radio" id="wood" name="workshop" value="wood" />
        <label for="wood">wood</label><br />
        <input type="radio" id="metal" name="workshop" value="metal" />
        <label for="metal">metal</label><br />
        <input type="radio" id="ceramic" name="workshop" value="ceramic" />
        <label for="ceramic">ceramic</label><br />
        <input type="radio" id="plastic" name="workshop" value="plastic" />
        <label for="plastic">plastic</label>
        <br />

        <p>Have you ever returned any of your library books late?</p>
        <input type="radio" id="never" name="library" value="never" />
        <label for="never">never</label><br />
        <input type="radio" id="once" name="library" value="once" />
        <label for="once">once</label><br />
        <input type="radio" id="more than once" name="library" value="more than once" />
        <label for="more than once">more than once</label><br />
        <input type="radio" id="I don't use the library" name="library" value="I don't use the library" />
        <label for="I don't use the library">I don't use the library</label>
        <br />

        <p>Do you use the 'Stairs to Go Up' to go down?</p>
        <input type="radio" id="never" name="stairs up" value="never" />
        <label for="never">never</label><br />
        <input type="radio" id="sometimes" name="stairs up" value="sometimes" />
        <label for="sometimes">sometimes</label><br />
        <input type="radio" id="regularly" name="stairs up" value="regularly" />
        <label for="regularly">regularly</label>
        <br />

        <p>Do you wear your mask while moving around DAE?</p>
        <input type="radio" id="always" name="mask" value="always" />
        <label for="always">always</label><br />
        <input type="radio" id="most of the time" name="mask" value="most of the time" />
        <label for="most of the time">most of the time</label><br />
        <input type="radio" id="rarely" name="mask" value="rarely" />
        <label for="rarely">rarely</label><br />
        <input type="radio" id="never" name="mask" value="never" />
        <label for="never">never</label>
        <br />
      </form>
    </div>

  );
}

export default App;
