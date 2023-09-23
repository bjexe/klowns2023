import "./App.css";
import klowns from "./klowns.json";
import React from "react";

function App() {
  const [statefulKlowns, setStatefulKlowns] = React.useState(klowns);
  const [roster, setRoster] = React.useState([]);
  const qbref = React.useRef(null);
  const rbref = React.useRef(null);
  const wrref = React.useRef(null);
  const dstref = React.useRef(null);
  const kref = React.useRef(null);
  const diddyref = React.useRef(null);

  const qbs = statefulKlowns.filter((player) => {
    if (player.pos === "QB") return true;
    else return false;
  });

  const rbs = statefulKlowns.filter((player) => {
    if (player.pos === "RB") return true;
    else return false;
  });

  const wrs = statefulKlowns.filter((player) => {
    if (player.pos === "WR" || player.pos === "TE") return true;
    else return false;
  });

  // const tes = statefulKlowns.filter((player) => {
  //   if (player.pos === "TE") return true;
  //   else return false;
  // });

  const dsts = statefulKlowns.filter((player) => {
    if (player.pos === "DST") return true;
    else return false;
  });

  const ks = statefulKlowns.filter((player) => {
    if (player.pos === "K") return true;
    else return false;
  });

  const cols = (
    <tr>
      <th>Name</th>
      <th>Pos</th>
      <th>Team</th>
      <th>Rank</th>
      <th>BW</th>
      <th>Picked</th>
      <th>Pick</th>
    </tr>
  );

  const qbTable = (
    <table class="table-auto border-separate border-spacing-x-8 border-spacing-y-2">
      {cols}
      {qbs.map((player) => {
        return (
          <tr
            className={
              player.crossed ? "text-red-500 line-through" : "text-blue-500"
            }
          >
            <td>{player.player}</td>
            <td>{player.pos}</td>
            <td>{player.team}</td>
            <td>{player.rank}</td>
            <td>{player.bw}</td>
            <td
              onClick={() => {
                setStatefulKlowns((old) => {
                  const allBut = old.filter((candidate) => {
                    if (candidate.player === player.player) return false;
                    else return true;
                  });
                  let ret = [
                    ...allBut,
                    { ...player, crossed: !player.crossed },
                  ];
                  ret = ret.sort((a, b) => {
                    if (a.rank === b.rank) {
                      return 0;
                    }
                    if (a.rank === null || a.rank === 0) {
                      return 1;
                    }
                    if (b.rank === null || b.rank === 0) {
                      return -1;
                    }
                    return a.rank < b.rank ? -1 : 1;
                  });
                  return ret;
                });
              }}
            >
              X
            </td>
            <td
              onClick={() => {
                setRoster((old) => [...old, player]);
                setStatefulKlowns((old) => {
                  const allBut = old.filter((candidate) => {
                    if (candidate.player === player.player) return false;
                    else return true;
                  });
                  let ret = [
                    ...allBut,
                    { ...player, crossed: !player.crossed },
                  ];
                  ret = ret.sort((a, b) => {
                    if (a.rank === b.rank) {
                      return 0;
                    }
                    if (a.rank === null || a.rank === 0) {
                      return 1;
                    }
                    if (b.rank === null || b.rank === 0) {
                      return -1;
                    }
                    return a.rank < b.rank ? -1 : 1;
                  });
                  return ret;
                });
                console.log(`adding ${player.player} to roster`);
              }}
            >
              O
            </td>
          </tr>
        );
      })}
    </table>
  );

  const rbTable = (
    <table class="table-auto border-separate border-spacing-x-8 border-spacing-y-2">
      {cols}
      {rbs.map((player) => {
        return (
          <tr
            className={
              player.crossed ? "text-red-500 line-through" : "text-blue-500"
            }
          >
            <td>{player.player}</td>
            <td>{player.pos}</td>
            <td>{player.team}</td>
            <td>{player.rank}</td>
            <td>{player.bw}</td>
            <td
              onClick={() => {
                setStatefulKlowns((old) => {
                  const allBut = old.filter((candidate) => {
                    if (candidate.player === player.player) return false;
                    else return true;
                  });
                  let ret = [
                    ...allBut,
                    { ...player, crossed: !player.crossed },
                  ];
                  ret = ret.sort((a, b) => {
                    if (a.rank === b.rank) {
                      return 0;
                    }
                    if (a.rank === null || a.rank === 0) {
                      return 1;
                    }
                    if (b.rank === null || b.rank === 0) {
                      return -1;
                    }
                    return a.rank < b.rank ? -1 : 1;
                  });
                  return ret;
                });
              }}
            >
              X
            </td>
            <td
              onClick={() => {
                setRoster((old) => [...old, player]);
                setStatefulKlowns((old) => {
                  const allBut = old.filter((candidate) => {
                    if (candidate.player === player.player) return false;
                    else return true;
                  });
                  let ret = [
                    ...allBut,
                    { ...player, crossed: !player.crossed },
                  ];
                  ret = ret.sort((a, b) => {
                    if (a.rank === b.rank) {
                      return 0;
                    }
                    if (a.rank === null || a.rank === 0) {
                      return 1;
                    }
                    if (b.rank === null || b.rank === 0) {
                      return -1;
                    }
                    return a.rank < b.rank ? -1 : 1;
                  });
                  return ret;
                });
                console.log(`adding ${player.player} to roster`);
              }}
            >
              O
            </td>
          </tr>
        );
      })}
    </table>
  );

  const wrTable = (
    <table class="table-auto border-separate border-spacing-x-8 border-spacing-y-2">
      {cols}
      {wrs.map((player) => {
        return (
          <tr
            className={
              player.crossed ? "text-red-500 line-through" : "text-blue-500"
            }
          >
            <td>{player.player}</td>
            <td>{player.pos}</td>
            <td>{player.team}</td>
            <td>{player.rank}</td>
            <td>{player.bw}</td>
            <td
              onClick={() => {
                setStatefulKlowns((old) => {
                  const allBut = old.filter((candidate) => {
                    if (candidate.player === player.player) return false;
                    else return true;
                  });
                  let ret = [
                    ...allBut,
                    { ...player, crossed: !player.crossed },
                  ];
                  ret = ret.sort((a, b) => {
                    if (a.rank === b.rank) {
                      return 0;
                    }
                    if (a.rank === null || a.rank === 0) {
                      return 1;
                    }
                    if (b.rank === null || b.rank === 0) {
                      return -1;
                    }
                    return a.rank < b.rank ? -1 : 1;
                  });
                  return ret;
                });
              }}
            >
              X
            </td>
            <td
              onClick={() => {
                setRoster((old) => [...old, player]);
                setStatefulKlowns((old) => {
                  const allBut = old.filter((candidate) => {
                    if (candidate.player === player.player) return false;
                    else return true;
                  });
                  let ret = [
                    ...allBut,
                    { ...player, crossed: !player.crossed },
                  ];
                  ret = ret.sort((a, b) => {
                    if (a.rank === b.rank) {
                      return 0;
                    }
                    if (a.rank === null || a.rank === 0) {
                      return 1;
                    }
                    if (b.rank === null || b.rank === 0) {
                      return -1;
                    }
                    return a.rank < b.rank ? -1 : 1;
                  });
                  return ret;
                });
                console.log(`adding ${player.player} to roster`);
              }}
            >
              O
            </td>
          </tr>
        );
      })}
    </table>
  );

  // const teTable = (
  //   <table class="table-auto border-separate border-spacing-x-8 border-spacing-y-2">
  //     {cols}
  //     {tes.map((player) => {
  //       return (
  //         <tr
  //           className={
  //             player.crossed ? "text-red-500 line-through" : "text-blue-500"
  //           }
  //         >
  //           <td>{player.player}</td>
  //           <td>{player.pos}</td>
  //           <td>{player.team}</td>
  //           <td>{player.rank}</td>
  //           <td>{player.bw}</td>
  //           <td
  //             onClick={() => {
  //               setStatefulKlowns((old) => {
  //                 const allBut = old.filter((candidate) => {
  //                   if (candidate.player === player.player) return false;
  //                   else return true;
  //                 });
  //                 let ret = [
  //                   ...allBut,
  //                   { ...player, crossed: !player.crossed },
  //                 ];
  //                 ret = ret.sort((a, b) => {
  //                   if (a.rank === b.rank) {
  //                     return 0;
  //                   }
  //                   if (a.rank === null || a.rank === 0) {
  //                     return 1;
  //                   }
  //                   if (b.rank === null || b.rank === 0) {
  //                     return -1;
  //                   }
  //                   return a.rank < b.rank ? -1 : 1;
  //                 });
  //                 return ret;
  //               });
  //             }}
  //           >
  //             X
  //           </td>
  //           <td
  //             onClick={() => {
  //               setRoster((old) => [...old, player]);
  //               setStatefulKlowns((old) => {
  //                 const allBut = old.filter((candidate) => {
  //                   if (candidate.player === player.player) return false;
  //                   else return true;
  //                 });
  //                 let ret = [
  //                   ...allBut,
  //                   { ...player, crossed: !player.crossed },
  //                 ];
  //                 ret = ret.sort((a, b) => {
  //                   if (a.rank === b.rank) {
  //                     return 0;
  //                   }
  //                   if (a.rank === null || a.rank === 0) {
  //                     return 1;
  //                   }
  //                   if (b.rank === null || b.rank === 0) {
  //                     return -1;
  //                   }
  //                   return a.rank < b.rank ? -1 : 1;
  //                 });
  //                 return ret;
  //               });
  //               console.log(`adding ${player.player} to roster`);
  //             }}
  //           >
  //             O
  //           </td>
  //         </tr>
  //       );
  //     })}
  //   </table>
  // );

  const dstTable = (
    <table class="table-auto border-separate border-spacing-x-8 border-spacing-y-2">
      {cols}
      {dsts.map((player) => {
        return (
          <tr
            className={
              player.crossed ? "text-red-500 line-through" : "text-blue-500"
            }
          >
            <td>{player.player}</td>
            <td>{player.pos}</td>
            <td>{player.team}</td>
            <td>{player.rank}</td>
            <td>{player.bw}</td>
            <td
              onClick={() => {
                setStatefulKlowns((old) => {
                  const allBut = old.filter((candidate) => {
                    if (candidate.player === player.player) return false;
                    else return true;
                  });
                  let ret = [
                    ...allBut,
                    { ...player, crossed: !player.crossed },
                  ];
                  ret = ret.sort((a, b) => {
                    if (a.rank === b.rank) {
                      return 0;
                    }
                    if (a.rank === null || a.rank === 0) {
                      return 1;
                    }
                    if (b.rank === null || b.rank === 0) {
                      return -1;
                    }
                    return a.rank < b.rank ? -1 : 1;
                  });
                  return ret;
                });
              }}
            >
              X
            </td>
            <td
              onClick={() => {
                setRoster((old) => [...old, player]);
                setStatefulKlowns((old) => {
                  const allBut = old.filter((candidate) => {
                    if (candidate.player === player.player) return false;
                    else return true;
                  });
                  let ret = [
                    ...allBut,
                    { ...player, crossed: !player.crossed },
                  ];
                  ret = ret.sort((a, b) => {
                    if (a.rank === b.rank) {
                      return 0;
                    }
                    if (a.rank === null || a.rank === 0) {
                      return 1;
                    }
                    if (b.rank === null || b.rank === 0) {
                      return -1;
                    }
                    return a.rank < b.rank ? -1 : 1;
                  });
                  return ret;
                });
                console.log(`adding ${player.player} to roster`);
              }}
            >
              O
            </td>
          </tr>
        );
      })}
    </table>
  );

  const kTable = (
    <table class="table-auto border-separate border-spacing-x-8 border-spacing-y-2">
      {cols}
      {ks.map((player) => {
        return (
          <tr
            className={
              player.crossed ? "text-red-500 line-through" : "text-blue-500"
            }
          >
            <td>{player.player}</td>
            <td>{player.pos}</td>
            <td>{player.team}</td>
            <td>{player.rank}</td>
            <td>{player.bw}</td>
            <td
              onClick={() => {
                setStatefulKlowns((old) => {
                  const allBut = old.filter((candidate) => {
                    if (candidate.player === player.player) return false;
                    else return true;
                  });
                  let ret = [
                    ...allBut,
                    { ...player, crossed: !player.crossed },
                  ];
                  ret = ret.sort((a, b) => {
                    if (a.rank === b.rank) {
                      return 0;
                    }
                    if (a.rank === null || a.rank === 0) {
                      return 1;
                    }
                    if (b.rank === null || b.rank === 0) {
                      return -1;
                    }
                    return a.rank < b.rank ? -1 : 1;
                  });
                  return ret;
                });
              }}
            >
              X
            </td>
            <td
              onClick={() => {
                setRoster((old) => [...old, player]);
                setStatefulKlowns((old) => {
                  const allBut = old.filter((candidate) => {
                    if (candidate.player === player.player) return false;
                    else return true;
                  });
                  let ret = [
                    ...allBut,
                    { ...player, crossed: !player.crossed },
                  ];
                  ret = ret.sort((a, b) => {
                    if (a.rank === b.rank) {
                      return 0;
                    }
                    if (a.rank === null || a.rank === 0) {
                      return 1;
                    }
                    if (b.rank === null || b.rank === 0) {
                      return -1;
                    }
                    return a.rank < b.rank ? -1 : 1;
                  });
                  return ret;
                });
                console.log(`adding ${player.player} to roster`);
              }}
            >
              O
            </td>
          </tr>
        );
      })}
    </table>
  );

  const rosterTable = (
    <table className="table-auto border-separate border-spacing-x-8 border-spacing-y-2">
      {cols}
      {roster.map((player) => {
        return (
          <tr className="text-green-500">
            <td>{player.player}</td>
            <td>{player.pos}</td>
            <td>{player.team}</td>
            <td>{player.rank}</td>
            <td>{player.bw}</td>
            <td
              onClick={() => {
                setRoster((old) => {
                  const allBut = old.filter((candidate) => {
                    if (candidate.player === player.player) return false;
                    else return true;
                  });
                  return allBut;
                });
              }}
            >
              X
            </td>
          </tr>
        );
      })}
    </table>
  );

  return (
    <div className="text-3xl">
      <div className="fixed z-10 h-[50px] bg-[#FFFFFF] w-[100%]">
        <button
          onClick={() => qbref.current?.scrollIntoView({ behavior: "smooth" })}
          className="mx-auto rounded-xl p-1 bg-[#32a852] hover:drop-shadow-2xl mb-12 mr-[10px]"
        >
          Quarter Backs
        </button>
        <button
          onClick={() => rbref.current?.scrollIntoView({ behavior: "smooth" })}
          className="mx-auto rounded-xl p-1 bg-[#32a852] hover:drop-shadow-2xl mb-12 mr-[10px]"
        >
          Running Backs
        </button>
        <button
          onClick={() => wrref.current?.scrollIntoView({ behavior: "smooth" })}
          className="mx-auto rounded-xl p-1 bg-[#32a852] hover:drop-shadow-2xl mb-12 mr-[10px]"
        >
          Wide Receivers & Tight Ends
        </button>
        <button
          onClick={() => dstref.current?.scrollIntoView({ behavior: "smooth" })}
          className="mx-auto rounded-xl p-1 bg-[#32a852] hover:drop-shadow-2xl mb-12 mr-[10px]"
        >
          Defense
        </button>
        <button
          onClick={() => kref.current?.scrollIntoView({ behavior: "smooth" })}
          className="mx-auto rounded-xl p-1 bg-[#32a852] hover:drop-shadow-2xl mb-12 mr-[10px]"
        >
          Kickers
        </button>
        <button
          onClick={() => diddyref.current?.scrollIntoView({ behavior: "smooth" })}
          className="mx-auto rounded-xl p-1 bg-[#32a852] hover:drop-shadow-2xl mb-12"
        >
          Roster
        </button>
      </div>
      <div className="h-[150px]"></div>
      <div className="flex justify-between">
        <div>
          <div className="flex flex-col justify-center items-center gap-y-20">
            <div ref={qbref}>
              <h1 className="text-center text-[50px] mb-4">Quarter Backs</h1>
              {qbTable}
            </div>

            <div ref={rbref}>
              <h1 className="text-center text-[50px] mb-4">Running Backs</h1>
              {rbTable}
            </div>

            <div ref={wrref}>
              <h1 className="text-center text-[50px] mb-4">Wide Receivers & Tight Ends</h1>
              {wrTable}
            </div>

            <div ref={dstref}>
              <h1 className="text-center text-[50px] mb-4">Defense</h1>
              {dstTable}
            </div>

            <div ref={kref}>
              <h1 className="text-center text-[50px] mb-4">Kickers</h1>
              {kTable}
            </div>
          </div>
        </div>
        <hr />
        <div>
          <div ref={diddyref} className="">
            <h1 className="flex flex-col justify-center items-center gap-y-20 text-[50px] mb-2">
              Diddy's Roster
            </h1>
            {rosterTable}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

// For diddy's roster, make sure the bye week is visible so diddy can make decisions on his current player's bye weeks
// TODO: add buttons that scroll to the relevant table, eg available quarterbacks
// split screen in half for available picks and current roster
