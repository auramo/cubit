
import K from "karet.util"
import * as U from "karet.util"
import React from "karet"
import ReactDOM from "react-dom"
import Feed from "./feed"

const contextBuilder = (path) => ({
  state: U.atom({path})
})

const context = contextBuilder(window.location.hash)

const routes = {
  "": () => <div>hello </div>,
  "#/feed": Feed
}

const NotFound = () => <div>Sorry, not found</div>

const Page = U.withContext(({routes}, {state}) => U.fromKefir(K(state, state => {
  console.log("path", state.path)
    return React.createElement(routes[state.path] || NotFound)
  }
)))

ReactDOM.render(
  <U.Context {...{context}}><Page {...{routes}}/>
  </U.Context>,
  document.getElementById("main"))
