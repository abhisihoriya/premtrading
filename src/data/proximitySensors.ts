import image1 from "../assets/categories/proximity-sensor/image1.jpg";
import image2 from "../assets/categories/proximity-sensor/image2.jpg";
import image3 from "../assets/categories/proximity-sensor/image3.jpg";
import image4 from "../assets/categories/proximity-sensor/image4.jpg";
import image5 from "../assets/categories/proximity-sensor/image5.jpg";
import image6 from "../assets/categories/proximity-sensor/image6.jpg";
import image7 from "../assets/categories/proximity-sensor/image7.jpg";

export type ProductSpec = {
  label: string;
  value: string;
};

export type SpecSection = {
  title: string;
  specs: ProductSpec[];
};

export type ProximitySensorProduct = {
  id: string;
  image: string;
  manufacturer: string;
  partNumber: string;
  orderCode: string;
  name: string;
  summary: string;
  housingSize: "M8" | "M12" | "M18";
  sensingDistance: string;
  mounting: string;
  connection: string;
  ipRating: string;
  sections: SpecSection[];
  datasheetUrl?: string;
};

export const proximitySensorCategory = {
  slug: "proximity-sensor",
  title: "Proximity Sensors",
  subtitle: "Inductive proximity switches & sensors — BALLUFF & major brands",
  description:
    "Genuine inductive proximity sensors for industrial automation. Flush and non-flush mounting, PNP outputs, M8/M12/M18 housings, and IP67–IP68 protection.",
  brands: ["Balluff", "Omron", "Turck", "Autonics"],
};

export const proximitySensorProducts: ProximitySensorProduct[] = [
  {
    id: "ptc0068",
    image: image1,
    manufacturer: "BALLUFF",
    partNumber: "BES inductive series",
    orderCode: "PTC0068",
    name: "M12 Flush Inductive Sensor — 4 mm",
    summary:
      "Cylindrical M12×1 flush-mount inductive proximity sensor with PNP NO output and M12 connector.",
    housingSize: "M12",
    sensingDistance: "4 mm",
    mounting: "Flush",
    connection: "M12×1 male, 3-pin",
    ipRating: "IP68",
    datasheetUrl:
      "https://drive.google.com/file/d/1T4spwz9oENg_J_vlnxWRAYSladiQ627z/view?usp=share_link",
    sections: [
      {
        title: "General",
        specs: [
          { label: "Manufacturer", value: "BALLUFF" },
          { label: "PTC order code", value: "PTC0068" },
          { label: "Product type", value: "Inductive proximity sensor / switch" },
          { label: "Construction", value: "Cylindrical" },
          { label: "Housing style", value: "M12×1" },
          { label: "Dimensions", value: "Ø 12 × 65 mm" },
          { label: "Installation", value: "Flush / shielded" },
        ],
      },
      {
        title: "Performance",
        specs: [
          { label: "Rated operating distance Sn", value: "4 mm" },
          { label: "Switching output", value: "PNP, normally open (NO)" },
          { label: "Switching frequency", value: "2500 Hz" },
        ],
      },
      {
        title: "Electrical",
        specs: [
          { label: "Operating voltage", value: "10…30 VDC" },
          { label: "Connection", value: "M12×1 male connector, 3-pin" },
        ],
      },
      {
        title: "Mechanical & environment",
        specs: [
          { label: "Housing material", value: "Brass, nickel-free coated" },
          { label: "Sensing face", value: "PBT" },
          { label: "Ambient temperature", value: "−25…70 °C" },
          { label: "IP rating", value: "IP68" },
        ],
      },
    ],
  },
  {
    id: "ptc008l",
    image: image2,
    manufacturer: "BALLUFF",
    partNumber: "BES008L",
    orderCode: "PTC008L",
    name: "M18 Flush Inductive Sensor — 8 mm",
    summary:
      "M18×1 flush-mount inductive sensor with 8 mm sensing range, PNP NO output, and M12 connection.",
    housingSize: "M18",
    sensingDistance: "8 mm",
    mounting: "Flush",
    connection: "M12×1 male, 3-pin, A-coded",
    ipRating: "IP68",
    datasheetUrl:
      "https://drive.google.com/file/d/1GifyDHI9CFN80L_FS_zp3umiPIZhX02T/view?usp=share_link",
    sections: [
      {
        title: "General",
        specs: [
          { label: "Manufacturer", value: "BALLUFF" },
          { label: "Order code", value: "BES008L / PTC008L" },
          { label: "Product type", value: "Inductive proximity sensor" },
          { label: "Housing / thread", value: "M18×1" },
          { label: "Dimensions", value: "Ø 18 × 66 mm" },
          { label: "Installation", value: "Flush mounting" },
        ],
      },
      {
        title: "Performance",
        specs: [
          { label: "Rated operating distance Sn", value: "8.0 mm" },
          { label: "Assured operating distance Sa", value: "6.4 mm" },
          { label: "Switching output", value: "PNP normally open (NO)" },
          { label: "Switching frequency", value: "1300 Hz" },
        ],
      },
      {
        title: "Electrical",
        specs: [
          { label: "Operating voltage", value: "10…30 VDC" },
          { label: "Rated operating voltage", value: "24 V DC" },
          { label: "Rated operating current", value: "200 mA" },
          { label: "Connection", value: "M12×1 male, 3-pin, A-coded" },
        ],
      },
      {
        title: "Mechanical & environment",
        specs: [
          { label: "Housing material", value: "Brass, nickel-free coated" },
          { label: "Sensing face", value: "PBT" },
          { label: "Ambient temperature", value: "−40…85 °C" },
          { label: "IP rating", value: "IP68" },
          {
            label: "Approvals",
            value: "CE, UKCA, cULus, WEEE",
          },
        ],
      },
    ],
  },
  {
    id: "ptc00ef",
    image: image3,
    manufacturer: "BALLUFF",
    partNumber: "BES series",
    orderCode: "PTC00EF",
    name: "M12 Flush Inductive Sensor — 4 mm (compact)",
    summary:
      "Compact Ø12×45 mm flush-mount inductive sensor with 4 mm Sn and 4-pole M12 connector.",
    housingSize: "M12",
    sensingDistance: "4 mm",
    mounting: "Flush",
    connection: "M12×1, 4-pole, A-coded",
    ipRating: "IP68",
    sections: [
      {
        title: "General",
        specs: [
          { label: "Manufacturer", value: "BALLUFF" },
          { label: "Order code", value: "PTC00EF" },
          { label: "Product family", value: "BES inductive proximity sensors" },
          { label: "Housing size", value: "M12×1" },
          { label: "Dimensions", value: "Ø 12 × 45 mm" },
          { label: "Installation", value: "For flush mounting" },
        ],
      },
      {
        title: "Performance",
        specs: [
          { label: "Rated operating distance Sn", value: "4 mm" },
          { label: "Assured operating distance Sa", value: "3.2 mm" },
          { label: "Real switching distance Sr", value: "4 mm" },
          { label: "Switching output", value: "PNP, normally open (NO)" },
          { label: "Switching frequency", value: "1000 Hz" },
        ],
      },
      {
        title: "Electrical",
        specs: [
          { label: "Operating voltage", value: "10…30 VDC" },
          { label: "Rated operating voltage", value: "24 V DC" },
          { label: "Rated operating current", value: "200 mA DC" },
          { label: "Connection", value: "M12×1 connector, 4-pole, A-coded" },
        ],
      },
      {
        title: "Mechanical & environment",
        specs: [
          { label: "Housing material", value: "Brass, nickel-free coated" },
          { label: "Sensing surface", value: "LCP" },
          { label: "Ambient temperature", value: "−25…70 °C" },
          { label: "IP rating", value: "IP68" },
          { label: "Protection class", value: "II" },
        ],
      },
    ],
  },
  {
    id: "bes01py",
    image: image4,
    manufacturer: "BALLUFF",
    partNumber: "BES01PY",
    orderCode: "BES01PY",
    name: "M12 Non-Flush Inductive Sensor — 8 mm",
    summary:
      "M12×1 non-flush inductive proximity sensor with 8 mm range, LED indication, and 4-pin M12 plug.",
    housingSize: "M12",
    sensingDistance: "8 mm",
    mounting: "Non-flush",
    connection: "M12×1 male, 4-pin, A-coded",
    ipRating: "IP68",
    sections: [
      {
        title: "General",
        specs: [
          { label: "Manufacturer", value: "BALLUFF" },
          { label: "Order code", value: "BES01PY" },
          { label: "Product type", value: "Inductive proximity sensor" },
          { label: "Housing style", value: "Cylindrical" },
          { label: "Housing size", value: "M12×1" },
          { label: "Dimensions", value: "Ø 12 × 45 mm" },
          { label: "Installation", value: "Non-flush" },
        ],
      },
      {
        title: "Performance",
        specs: [
          { label: "Rated operating distance Sn", value: "8 mm" },
          { label: "Assured operating distance Sa", value: "6.4 mm" },
          { label: "Real switching distance sr", value: "8 mm" },
          { label: "Switching output", value: "PNP normally open (NO)" },
          { label: "Switching frequency", value: "1000 Hz" },
          { label: "Function indicator", value: "Yes" },
        ],
      },
      {
        title: "Electrical",
        specs: [
          { label: "Operating voltage Ub", value: "10…30 VDC" },
          { label: "Rated operating voltage Ue", value: "24 V DC" },
          { label: "Rated operating current Ie", value: "200 mA" },
          { label: "Connection", value: "M12×1 male, 4-pin, A-coded" },
        ],
      },
      {
        title: "Mechanical & environment",
        specs: [
          { label: "Housing material", value: "Brass, nickel-free coated" },
          { label: "Sensing surface", value: "PBT" },
          { label: "Ambient temperature", value: "−25…70 °C" },
          { label: "IP rating", value: "IP68" },
          { label: "Basic standard", value: "IEC 60947-5-2" },
          {
            label: "Approvals",
            value: "CE, UKCA, cULus, WEEE",
          },
        ],
      },
    ],
  },
  {
    id: "ptc002b",
    image: image5,
    manufacturer: "BALLUFF",
    partNumber: "BES M08MH1-PSC20B-S04G",
    orderCode: "PTC002B",
    name: "M8 Flush Inductive Sensor — 2 mm",
    summary:
      "M8×1 flush-mount sensor with 2 mm Sn, 4-pin M12 connection, and function LED.",
    housingSize: "M8",
    sensingDistance: "2 mm",
    mounting: "Flush",
    connection: "M12×1 male, 4-pin, A-coded",
    ipRating: "IP67",
    datasheetUrl:
      "https://drive.google.com/file/d/1lfdPvd2KhxKPtuZUqtAdrrIKxpClDwl/view?usp=share_link",
    sections: [
      {
        title: "General",
        specs: [
          { label: "Manufacturer", value: "BALLUFF" },
          { label: "Product / part number", value: "BES M08MH1-PSC20B-S04G" },
          { label: "PTC order code", value: "PTC002B" },
          { label: "Product type", value: "Inductive proximity switch / sensor" },
          { label: "Housing style", value: "Cylindrical threaded barrel" },
          { label: "Housing size", value: "M8×1" },
          { label: "Dimensions", value: "Ø 8 × 65 mm" },
          { label: "Installation", value: "For flush mounting" },
        ],
      },
      {
        title: "Performance",
        specs: [
          { label: "Rated operating distance Sn", value: "2 mm" },
          { label: "Assured operating distance Sa", value: "1.6 mm" },
          { label: "Real switching distance Sr", value: "2 mm" },
          { label: "Switching output", value: "PNP normally open (NO)" },
          { label: "Switching frequency", value: "700 Hz" },
          { label: "Function indicator", value: "Yes" },
        ],
      },
      {
        title: "Electrical",
        specs: [
          { label: "Operating voltage Ub", value: "12…30 VDC" },
          { label: "Rated operating voltage Ue", value: "24 V DC" },
          { label: "Rated operating current Ie", value: "200 mA" },
          { label: "Connection", value: "M12×1 male, 4-pin, A-coded" },
        ],
      },
      {
        title: "Mechanical & environment",
        specs: [
          { label: "Housing material", value: "Brass, nickel-free coated" },
          { label: "Sensing surface", value: "PBT" },
          { label: "Ambient temperature", value: "−25…70 °C" },
          { label: "IP rating", value: "IP67" },
          { label: "Basic standard", value: "IEC 60947-5-2" },
        ],
      },
    ],
  },
  {
    id: "ptc0030",
    image: image6,
    manufacturer: "BALLUFF",
    partNumber: "BES M18MI-PSC50B-BP03",
    orderCode: "PTC0030",
    name: "M18 Flush Inductive Sensor — 5 mm (cable)",
    summary:
      "M18 flush-mount inductive sensor with 5 mm Sn, 3 m PUR cable, and high switching frequency.",
    housingSize: "M18",
    sensingDistance: "5 mm",
    mounting: "Flush",
    connection: "Cable, 3.00 m, PUR",
    ipRating: "IP68",
    sections: [
      {
        title: "General",
        specs: [
          { label: "Manufacturer", value: "BALLUFF" },
          { label: "Product / part number", value: "BES M18MI-PSC50B-BP03" },
          { label: "PTC order code", value: "PTC0030" },
          { label: "Product family", value: "BES inductive proximity switches" },
          { label: "Housing", value: "M18×1" },
          { label: "Dimensions", value: "Ø 18 × 55 mm" },
          { label: "Installation", value: "For flush mounting" },
        ],
      },
      {
        title: "Performance",
        specs: [
          { label: "Rated operating distance Sn", value: "5 mm" },
          { label: "Assured operating distance Sa", value: "4.0 mm" },
          { label: "Switching output", value: "PNP normally open (NO)" },
          { label: "Switching frequency", value: "2000 Hz" },
          { label: "Function indicator", value: "Yes" },
        ],
      },
      {
        title: "Electrical",
        specs: [
          { label: "Operating voltage Ub", value: "10…30 VDC" },
          { label: "Rated operating voltage Ue", value: "24 V DC" },
          { label: "Rated operating current Ie", value: "200 mA DC" },
          { label: "Connection", value: "Cable, 3.00 m, PUR" },
        ],
      },
      {
        title: "Mechanical & environment",
        specs: [
          { label: "Housing material", value: "Brass, nickel-free coated" },
          { label: "Sensing surface", value: "PBT" },
          { label: "Ambient temperature", value: "−40…85 °C" },
          { label: "IP rating", value: "IP68" },
          { label: "Basic standard", value: "IEC 60947-5-2" },
          {
            label: "Approvals",
            value: "CE, UKCA, cULus, WEEE",
          },
        ],
      },
    ],
  },
  {
    id: "ptc01aw",
    image: image7,
    manufacturer: "BALLUFF",
    partNumber: "BES 516-324-S49-C",
    orderCode: "PTC01AW",
    name: "M8 Flush Inductive Sensor — 1.5 mm (SS)",
    summary:
      "Stainless steel M8 sensor with 1.5 mm Sn, M8 connector, and IP68 for harsh environments.",
    housingSize: "M8",
    sensingDistance: "1.5 mm",
    mounting: "Flush",
    connection: "M8×1 male, 3-pin",
    ipRating: "IP68",
    sections: [
      {
        title: "General",
        specs: [
          { label: "Manufacturer", value: "BALLUFF" },
          { label: "Product / part number", value: "BES 516-324-S49-C" },
          { label: "BALLUFF order code", value: "PTC01AW" },
          { label: "Product type", value: "Inductive proximity switch / sensor" },
          { label: "Dimension", value: "Ø 8 × 55 mm" },
          { label: "Housing / thread", value: "M8×1" },
          { label: "Installation", value: "Flush mounting" },
        ],
      },
      {
        title: "Performance",
        specs: [
          { label: "Rated operating distance Sn", value: "1.5 mm" },
          { label: "Assured operating distance Sa", value: "1.2 mm" },
          { label: "Effective switching distance Sr", value: "1.5 mm" },
          { label: "Switching output", value: "PNP, normally open (NO)" },
          { label: "Switching frequency", value: "5000 Hz" },
          { label: "Function indicator", value: "Yes (LED)" },
        ],
      },
      {
        title: "Electrical",
        specs: [
          { label: "Operating voltage Ub", value: "10…30 VDC" },
          { label: "Rated operating voltage Ue", value: "24 VDC" },
          { label: "Rated operating current Ie", value: "200 mA" },
          { label: "Voltage drop (max.)", value: "2.5 V" },
          { label: "Rated insulation voltage Ui", value: "250 VAC" },
          { label: "Connection", value: "M8×1 male, 3-pin" },
          { label: "Short-circuit protection", value: "Yes" },
          { label: "Polarity reversal protection", value: "Yes" },
        ],
      },
      {
        title: "Mechanical & environment",
        specs: [
          { label: "Housing material", value: "Stainless steel" },
          { label: "Sensing surface", value: "PBT" },
          { label: "Ambient temperature", value: "−40…85 °C" },
          { label: "IP rating", value: "IP68" },
          { label: "Tightening torque", value: "8 Nm" },
          { label: "Protection class", value: "II" },
        ],
      },
    ],
  },
];

export function getProximityProduct(id: string): ProximitySensorProduct | undefined {
  return proximitySensorProducts.find((p) => p.id === id);
}
