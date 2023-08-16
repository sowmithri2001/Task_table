import React from "react";

const Task = () => {
  let data = [
    {
      id: "0001",
      type: "donut",
      name: "Cake",
      ppu: 0.55,
      batters: {
        batter: [
          {
            id: "1001",
            type: "Regular",
          },
          {
            id: "1002",
            type: "Chocolate",
          },
          {
            id: "1003",
            type: "Blueberry",
          },
        ],
      },
      topping: [
        {
          id: "5001",
          type: "None",
        },
        {
          id: "5002",
          type: "Glazed",
        },
        {
          id: "5005",
          type: "Sugar",
        },
        {
          id: "5007",
          type: "Powdered Sugar",
        },
      ],
    },
    {
      id: "0002",
      type: "donut",
      name: "Cake",
      ppu: 0.55,
      batters: {
        batter: [
          {
            id: "1001",
            type: "Blueberry",
          },
        ],
      },
      topping: [
        {
          id: "5001",
          type: "None",
        },
        {
          id: "5002",
          type: "Glazed",
        },
      ],
    },
  ];

  data.map((e) => {
    e.batters.batter.map((f) => {
      let value = {
        id: e.id,
        type: e.type,
        name: e.name,
        ppu: e.ppu,
        batter: f.type,
        topping: e.topping,
      };
    });
  });

  return (
    <div>
      <table id="collapseTable">
        <tr>
          <th>id</th>
          <th>type</th>
          <th>name</th>
          <th>ppu</th>
          <th>batter</th>
          <th>topping</th>
        </tr>
        {data.map((e) => {
          return (
            <>
              {e.batters.batter.map((f) => {
                return (
                  <>
                    <tr>
                      <td>{e.id}</td>
                      <td>{e.type}</td>
                      <td>{e.name}</td>
                      <td>{e.ppu}</td>
                      <td>{f.type}</td>
                      <td id="width">
                        {e.topping.map((g, i) => {
                          return (
                            <>
                              <span>
                                {g.type}
                                <span>
                                  {i < e.topping.length - 1 ? ", " : " "}
                                </span>
                              </span>
                            </>
                          );
                        })}
                      </td>
                    </tr>
                  </>
                );
              })}
            </>
          );
        })}
      </table>
    </div>
  );
};

export default Task;
