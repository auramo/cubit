import React from "karet"
import * as U from "karet.util"

const Feed = U.withContext((_, {state}) => {
  console.log("state", state)
    const value = U.atom("")
    return <div>
      <a href="/">Back</a>
      <p>Feed stuff</p>
      <span>{U.view("feedStuff", state)}</span>
      <input
        onChange={e => value.set(e.currentTarget.value)}
      />
      {
        U.seq(
          value,
          U.changes,
          U.debounce(600),
          U.flatMapLatest(e => console.log("value to send to server", e)),
          U.startWith(true)
        )
      }
    </div>
  }
)

export default Feed
