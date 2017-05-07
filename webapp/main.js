
import K from "karet.util"
import * as U from "karet.util"
import React from "karet"
import ReactDOM from "react-dom"
import Feed from "./feed"

const contextBuilder = (path) => {
  window.stateAtom = U.atom({path, feedStuff: "x"})
  return {state: window.stateAtom}
}

const context = contextBuilder(window.location.hash)

const onHashChange = (evt) => {
  window.stateAtom.modify((current) => ({...current, path: window.location.hash}))
}

const Index = () => <div>hello <a href="/#/feed">feed</a></div>

const routes = {
  "": Index,
  "#/": Index,
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

window.addEventListener("hashchange", onHashChange, false);
