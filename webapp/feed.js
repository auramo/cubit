import React from "karet"
import * as U from "karet.util"

const Feed = U.withContext(({country}, {path}) => {
    const value = U.atom("")
    return <div>
      <h3>{country}</h3>
      <p>Feed stuff</p>
      <p>{path}</p>
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
