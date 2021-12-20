let values = {
  1: {
    carrier: "CCH",
    service: "DEX",
  },
  17: {
    carrier: "CHP",

    service: "express",
  },
};

let json = {
  data: {
    BUIN: {
      limit: 1,
      over_carrier_service_id: 17,
      under_carrier_service_id: 17,
    },
    LAJA: {
      limit: 1,
      over_carrier_service_id: 1,
      under_carrier_service_id: 1,
    },
    LEBU: {
      limit: 1,
      over_carrier_service_id: 1,
      under_carrier_service_id: 1,
    },
    LOTA: {
      limit: 1,
      over_carrier_service_id: 17,
      under_carrier_service_id: 17,
    },
  },
};

const returnedTarget = (json, values) => {
  let obj = [];
  for (const key in json.data) {
    obj.push({
      [key]: {
        limit: json.data[key].limit,
        over: {
          carrier:
            key === "BUIN" || key === "LOTA"
              ? values[17].carrier
              : values[1].carrier,
          service:
            key === "BUIN" || key === "LOTA"
              ? values[17].service
              : values[1].service,
        },
        under: {
          carrier:
            key === "BUIN" || key === "LOTA"
              ? values[17].carrier
              : values[1].carrier,
          service:
            key === "BUIN" || key === "LOTA"
              ? values[17].service
              : values[1].service,
        },
      },
    });
  }
  return Object.assign(obj[0], obj[1], obj[2], obj[3]);
};

console.log(returnedTarget(json, values), "json result end");
