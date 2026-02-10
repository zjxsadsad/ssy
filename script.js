// ========== MARD 色号数据 (模拟) ==========
const COLORS_ORIGINAL = [
  {
    "id": "A1",
    "hex": "#FAF4C8"
  },
  {
    "id": "A2",
    "hex": "#FFFFD5"
  },
  {
    "id": "A3",
    "hex": "#FEFF8B"
  },
  {
    "id": "A4",
    "hex": "#FBED56"
  },
  {
    "id": "A5",
    "hex": "#F4D738"
  },
  {
    "id": "A6",
    "hex": "#FEAC4C"
  },
  {
    "id": "A7",
    "hex": "#FE8B4C"
  },
  {
    "id": "A8",
    "hex": "#FFDA45"
  },
  {
    "id": "A9",
    "hex": "#FF995B"
  },
  {
    "id": "A10",
    "hex": "#F77C31"
  },
  {
    "id": "A11",
    "hex": "#FFDD99"
  },
  {
    "id": "A12",
    "hex": "#FE9F72"
  },
  {
    "id": "A13",
    "hex": "#FFC365"
  },
  {
    "id": "A14",
    "hex": "#FD543D"
  },
  {
    "id": "A15",
    "hex": "#FFF365"
  },
  {
    "id": "A16",
    "hex": "#FFFF9F"
  },
  {
    "id": "A17",
    "hex": "#FFE36E"
  },
  {
    "id": "A18",
    "hex": "#FEBE7D"
  },
  {
    "id": "A19",
    "hex": "#FD7C72"
  },
  {
    "id": "A20",
    "hex": "#FFD568"
  },
  {
    "id": "A21",
    "hex": "#FFE395"
  },
  {
    "id": "A22",
    "hex": "#F4F57D"
  },
  {
    "id": "A23",
    "hex": "#E6C9B7"
  },
  {
    "id": "A24",
    "hex": "#F7F8A2"
  },
  {
    "id": "A25",
    "hex": "#FFD67D"
  },
  {
    "id": "A26",
    "hex": "#FFC830"
  },
  {
    "id": "B1",
    "hex": "#E6EE31"
  },
  {
    "id": "B2",
    "hex": "#63F347"
  },
  {
    "id": "B3",
    "hex": "#9EF780"
  },
  {
    "id": "B4",
    "hex": "#5DE035"
  },
  {
    "id": "B5",
    "hex": "#35E352"
  },
  {
    "id": "B6",
    "hex": "#65E2A6"
  },
  {
    "id": "B7",
    "hex": "#3DAF80"
  },
  {
    "id": "B8",
    "hex": "#1C9C4F"
  },
  {
    "id": "B9",
    "hex": "#27523A"
  },
  {
    "id": "B10",
    "hex": "#95D3C2"
  },
  {
    "id": "B11",
    "hex": "#5D722A"
  },
  {
    "id": "B12",
    "hex": "#166F41"
  },
  {
    "id": "B13",
    "hex": "#CAEB7B"
  },
  {
    "id": "B14",
    "hex": "#ADE946"
  },
  {
    "id": "B15",
    "hex": "#2E5132"
  },
  {
    "id": "B16",
    "hex": "#C5ED9C"
  },
  {
    "id": "B17",
    "hex": "#9BB13A"
  },
  {
    "id": "B18",
    "hex": "#E6EE49"
  },
  {
    "id": "B19",
    "hex": "#24B88C"
  },
  {
    "id": "B20",
    "hex": "#C2F0CC"
  },
  {
    "id": "B21",
    "hex": "#156A6B"
  },
  {
    "id": "B22",
    "hex": "#0B3C43"
  },
  {
    "id": "B23",
    "hex": "#303A21"
  },
  {
    "id": "B24",
    "hex": "#EEFCA5"
  },
  {
    "id": "B25",
    "hex": "#4E846D"
  },
  {
    "id": "B26",
    "hex": "#8D7A35"
  },
  {
    "id": "B27",
    "hex": "#CCE1AF"
  },
  {
    "id": "B28",
    "hex": "#9EE5B9"
  },
  {
    "id": "B29",
    "hex": "#C5E254"
  },
  {
    "id": "B30",
    "hex": "#E2FCB1"
  },
  {
    "id": "B31",
    "hex": "#B0E792"
  },
  {
    "id": "B32",
    "hex": "#9CAB5A"
  },
  {
    "id": "C1",
    "hex": "#E8FFE7"
  },
  {
    "id": "C2",
    "hex": "#A9F9FC"
  },
  {
    "id": "C3",
    "hex": "#A0E2FB"
  },
  {
    "id": "C4",
    "hex": "#41CCFF"
  },
  {
    "id": "C5",
    "hex": "#01ACEB"
  },
  {
    "id": "C6",
    "hex": "#50AAF0"
  },
  {
    "id": "C7",
    "hex": "#3677D2"
  },
  {
    "id": "C8",
    "hex": "#0F54C0"
  },
  {
    "id": "C9",
    "hex": "#324BCA"
  },
  {
    "id": "C10",
    "hex": "#3EBCE2"
  },
  {
    "id": "C11",
    "hex": "#28DDDE"
  },
  {
    "id": "C12",
    "hex": "#1C334D"
  },
  {
    "id": "C13",
    "hex": "#CDE8FF"
  },
  {
    "id": "C14",
    "hex": "#D5FDFF"
  },
  {
    "id": "C15",
    "hex": "#22C4C6"
  },
  {
    "id": "C16",
    "hex": "#1557A8"
  },
  {
    "id": "C17",
    "hex": "#04D1F6"
  },
  {
    "id": "C18",
    "hex": "#1D3344"
  },
  {
    "id": "C19",
    "hex": "#1887A2"
  },
  {
    "id": "C20",
    "hex": "#176DAF"
  },
  {
    "id": "C21",
    "hex": "#BEDDFF"
  },
  {
    "id": "C22",
    "hex": "#67B4BE"
  },
  {
    "id": "C23",
    "hex": "#C8E2FF"
  },
  {
    "id": "C24",
    "hex": "#7CC4FF"
  },
  {
    "id": "C25",
    "hex": "#A9E5E5"
  },
  {
    "id": "C26",
    "hex": "#3CAED8"
  },
  {
    "id": "C27",
    "hex": "#D3DFFA"
  },
  {
    "id": "C28",
    "hex": "#BBCFED"
  },
  {
    "id": "C29",
    "hex": "#34488E"
  },
  {
    "id": "D1",
    "hex": "#AEB4F2"
  },
  {
    "id": "D2",
    "hex": "#858EDD"
  },
  {
    "id": "D3",
    "hex": "#2F54AF"
  },
  {
    "id": "D4",
    "hex": "#182A84"
  },
  {
    "id": "D5",
    "hex": "#B843C5"
  },
  {
    "id": "D6",
    "hex": "#AC7BDE"
  },
  {
    "id": "D7",
    "hex": "#8854B3"
  },
  {
    "id": "D8",
    "hex": "#E2D3FF"
  },
  {
    "id": "D9",
    "hex": "#D5B9F8"
  },
  {
    "id": "D10",
    "hex": "#361851"
  },
  {
    "id": "D11",
    "hex": "#B9BAE1"
  },
  {
    "id": "D12",
    "hex": "#DE9AD4"
  },
  {
    "id": "D13",
    "hex": "#B90095"
  },
  {
    "id": "D14",
    "hex": "#8B279B"
  },
  {
    "id": "D15",
    "hex": "#2F1F90"
  },
  {
    "id": "D16",
    "hex": "#E3E1EE"
  },
  {
    "id": "D17",
    "hex": "#C4D4F6"
  },
  {
    "id": "D18",
    "hex": "#A45EC7"
  },
  {
    "id": "D19",
    "hex": "#D8C3D7"
  },
  {
    "id": "D20",
    "hex": "#9C32B2"
  },
  {
    "id": "D21",
    "hex": "#9A009B"
  },
  {
    "id": "D22",
    "hex": "#333A95"
  },
  {
    "id": "D23",
    "hex": "#EBDAFC"
  },
  {
    "id": "D24",
    "hex": "#7786E5"
  },
  {
    "id": "D25",
    "hex": "#494FC7"
  },
  {
    "id": "D26",
    "hex": "#DFC2F8"
  },
  {
    "id": "E1",
    "hex": "#FDD3CC"
  },
  {
    "id": "E2",
    "hex": "#FEC0DF"
  },
  {
    "id": "E3",
    "hex": "#FFB7E7"
  },
  {
    "id": "E4",
    "hex": "#E8649E"
  },
  {
    "id": "E5",
    "hex": "#F551A2"
  },
  {
    "id": "E6",
    "hex": "#F13D74"
  },
  {
    "id": "E7",
    "hex": "#C63478"
  },
  {
    "id": "E8",
    "hex": "#FFDBE9"
  },
  {
    "id": "E9",
    "hex": "#E970CC"
  },
  {
    "id": "E10",
    "hex": "#D33793"
  },
  {
    "id": "E11",
    "hex": "#FCDDD2"
  },
  {
    "id": "E12",
    "hex": "#F78FC3"
  },
  {
    "id": "E13",
    "hex": "#B5006D"
  },
  {
    "id": "E14",
    "hex": "#FFD1BA"
  },
  {
    "id": "E15",
    "hex": "#F8C7C9"
  },
  {
    "id": "E16",
    "hex": "#FFF3EB"
  },
  {
    "id": "E17",
    "hex": "#FFE2EA"
  },
  {
    "id": "E18",
    "hex": "#FFC7DB"
  },
  {
    "id": "E19",
    "hex": "#FEBAD5"
  },
  {
    "id": "E20",
    "hex": "#D8C7D1"
  },
  {
    "id": "E21",
    "hex": "#BD9DA1"
  },
  {
    "id": "E22",
    "hex": "#B785A1"
  },
  {
    "id": "E23",
    "hex": "#937A8D"
  },
  {
    "id": "E24",
    "hex": "#E1BCE8"
  },
  {
    "id": "F1",
    "hex": "#FD957B"
  },
  {
    "id": "F2",
    "hex": "#FC3D46"
  },
  {
    "id": "F3",
    "hex": "#F74941"
  },
  {
    "id": "F4",
    "hex": "#FC283C"
  },
  {
    "id": "F5",
    "hex": "#E7002F"
  },
  {
    "id": "F6",
    "hex": "#943630"
  },
  {
    "id": "F7",
    "hex": "#971937"
  },
  {
    "id": "F8",
    "hex": "#BC0028"
  },
  {
    "id": "F9",
    "hex": "#E2677A"
  },
  {
    "id": "F10",
    "hex": "#8A4526"
  },
  {
    "id": "F11",
    "hex": "#5A2121"
  },
  {
    "id": "F12",
    "hex": "#FD4E6A"
  },
  {
    "id": "F13",
    "hex": "#F35744"
  },
  {
    "id": "F14",
    "hex": "#FFA9AD"
  },
  {
    "id": "F15",
    "hex": "#D30022"
  },
  {
    "id": "F16",
    "hex": "#FEC2A6"
  },
  {
    "id": "F17",
    "hex": "#E69C79"
  },
  {
    "id": "F18",
    "hex": "#D37C46"
  },
  {
    "id": "F19",
    "hex": "#C1444A"
  },
  {
    "id": "F20",
    "hex": "#CD9391"
  },
  {
    "id": "F21",
    "hex": "#F7B4C6"
  },
  {
    "id": "F22",
    "hex": "#FDC0D0"
  },
  {
    "id": "F23",
    "hex": "#F67E66"
  },
  {
    "id": "F24",
    "hex": "#E698AA"
  },
  {
    "id": "F25",
    "hex": "#E54B4F"
  },
  {
    "id": "G1",
    "hex": "#FFE2CE"
  },
  {
    "id": "G2",
    "hex": "#FFC4AA"
  },
  {
    "id": "G3",
    "hex": "#F4C3A5"
  },
  {
    "id": "G4",
    "hex": "#E1B383"
  },
  {
    "id": "G5",
    "hex": "#EDB045"
  },
  {
    "id": "G6",
    "hex": "#E99C17"
  },
  {
    "id": "G7",
    "hex": "#9D5B3E"
  },
  {
    "id": "G8",
    "hex": "#753832"
  },
  {
    "id": "G9",
    "hex": "#E6B483"
  },
  {
    "id": "G10",
    "hex": "#D98C39"
  },
  {
    "id": "G11",
    "hex": "#E0C593"
  },
  {
    "id": "G12",
    "hex": "#FFC890"
  },
  {
    "id": "G13",
    "hex": "#B7714A"
  },
  {
    "id": "G14",
    "hex": "#8D614C"
  },
  {
    "id": "G15",
    "hex": "#FCF9E0"
  },
  {
    "id": "G16",
    "hex": "#F2D9BA"
  },
  {
    "id": "G17",
    "hex": "#78524B"
  },
  {
    "id": "G18",
    "hex": "#FFE4CC"
  },
  {
    "id": "G19",
    "hex": "#E07935"
  },
  {
    "id": "G20",
    "hex": "#A94023"
  },
  {
    "id": "G21",
    "hex": "#B88558"
  },
  {
    "id": "H1",
    "hex": "#FDFBFF"
  },
  {
    "id": "H2",
    "hex": "#FEFFFF"
  },
  {
    "id": "H3",
    "hex": "#B6B1BA"
  },
  {
    "id": "H4",
    "hex": "#89858C"
  },
  {
    "id": "H5",
    "hex": "#48464E"
  },
  {
    "id": "H6",
    "hex": "#2F2B2F"
  },
  {
    "id": "H7",
    "hex": "#000000"
  },
  {
    "id": "H8",
    "hex": "#E7D6DB"
  },
  {
    "id": "H9",
    "hex": "#EDEDED"
  },
  {
    "id": "H10",
    "hex": "#EEE9EA"
  },
  {
    "id": "H11",
    "hex": "#CECDD5"
  },
  {
    "id": "H12",
    "hex": "#FFF5ED"
  },
  {
    "id": "H13",
    "hex": "#F5ECD2"
  },
  {
    "id": "H14",
    "hex": "#CFD7D3"
  },
  {
    "id": "H15",
    "hex": "#98A6A8"
  },
  {
    "id": "H16",
    "hex": "#1D1414"
  },
  {
    "id": "H17",
    "hex": "#F1EDED"
  },
  {
    "id": "H18",
    "hex": "#FFFDF0"
  },
  {
    "id": "H19",
    "hex": "#F6EFE2"
  },
  {
    "id": "H20",
    "hex": "#949FA3"
  },
  {
    "id": "H21",
    "hex": "#FFFBE1"
  },
  {
    "id": "H22",
    "hex": "#CACAD4"
  },
  {
    "id": "H23",
    "hex": "#9A9D94"
  },
  {
    "id": "M1",
    "hex": "#BCC6B8"
  },
  {
    "id": "M2",
    "hex": "#8AA386"
  },
  {
    "id": "M3",
    "hex": "#697D80"
  },
  {
    "id": "M4",
    "hex": "#E3D2BC"
  },
  {
    "id": "M5",
    "hex": "#D0CCAA"
  },
  {
    "id": "M6",
    "hex": "#B0A782"
  },
  {
    "id": "M7",
    "hex": "#B4A497"
  },
  {
    "id": "M8",
    "hex": "#B38281"
  },
  {
    "id": "M9",
    "hex": "#A58767"
  },
  {
    "id": "M10",
    "hex": "#C5B2BC"
  },
  {
    "id": "M11",
    "hex": "#9F7594"
  },
  {
    "id": "M12",
    "hex": "#644749"
  },
  {
    "id": "M13",
    "hex": "#D19066"
  },
  {
    "id": "M14",
    "hex": "#C77362"
  },
  {
    "id": "M15",
    "hex": "#757D78"
  },
  {
    "id": "P1",
    "hex": "#FCF7F8"
  },
  {
    "id": "P2",
    "hex": "#B0A9AC"
  },
  {
    "id": "P3",
    "hex": "#AFDCAB"
  },
  {
    "id": "P4",
    "hex": "#FEA49F"
  },
  {
    "id": "P5",
    "hex": "#EE8C3E"
  },
  {
    "id": "P6",
    "hex": "#5FD0A7"
  },
  {
    "id": "P7",
    "hex": "#EB9270"
  },
  {
    "id": "P8",
    "hex": "#F0D958"
  },
  {
    "id": "P9",
    "hex": "#D9D9D9"
  },
  {
    "id": "P10",
    "hex": "#D9C7EA"
  },
  {
    "id": "P11",
    "hex": "#F3ECC9"
  },
  {
    "id": "P12",
    "hex": "#E6EEF2"
  },
  {
    "id": "P13",
    "hex": "#AACBEF"
  },
  {
    "id": "P14",
    "hex": "#337680"
  },
  {
    "id": "P15",
    "hex": "#668575"
  },
  {
    "id": "P16",
    "hex": "#FEBF45"
  },
  {
    "id": "P17",
    "hex": "#FEA324"
  },
  {
    "id": "P18",
    "hex": "#FEB89F"
  },
  {
    "id": "P19",
    "hex": "#FFFEEC"
  },
  {
    "id": "P20",
    "hex": "#FEBECF"
  },
  {
    "id": "P21",
    "hex": "#ECBEBF"
  },
  {
    "id": "P22",
    "hex": "#E4A89F"
  },
  {
    "id": "P23",
    "hex": "#A56268"
  },
  {
    "id": "Q1",
    "hex": "#F2A5E8"
  },
  {
    "id": "Q2",
    "hex": "#E9EC91"
  },
  {
    "id": "Q3",
    "hex": "#FFFF00"
  },
  {
    "id": "Q4",
    "hex": "#FFEBFA"
  },
  {
    "id": "Q5",
    "hex": "#76CEDE"
  },
  {
    "id": "R1",
    "hex": "#D50D21"
  },
  {
    "id": "R2",
    "hex": "#F92F83"
  },
  {
    "id": "R3",
    "hex": "#FD8324"
  },
  {
    "id": "R4",
    "hex": "#F8EC31"
  },
  {
    "id": "R5",
    "hex": "#35C75B"
  },
  {
    "id": "R6",
    "hex": "#238891"
  },
  {
    "id": "R7",
    "hex": "#19779D"
  },
  {
    "id": "R8",
    "hex": "#1A60C3"
  },
  {
    "id": "R9",
    "hex": "#9A56B4"
  },
  {
    "id": "R10",
    "hex": "#FFDB4C"
  },
  {
    "id": "R11",
    "hex": "#FFEBFA"
  },
  {
    "id": "R12",
    "hex": "#D8D5CE"
  },
  {
    "id": "R13",
    "hex": "#55514C"
  },
  {
    "id": "R14",
    "hex": "#9FE4DF"
  },
  {
    "id": "R15",
    "hex": "#77CEE9"
  },
  {
    "id": "R16",
    "hex": "#3ECFCA"
  },
  {
    "id": "R17",
    "hex": "#4A867A"
  },
  {
    "id": "R18",
    "hex": "#7FCD9D"
  },
  {
    "id": "R19",
    "hex": "#CDE55D"
  },
  {
    "id": "R20",
    "hex": "#E8C7B4"
  },
  {
    "id": "R21",
    "hex": "#AD6F3C"
  },
  {
    "id": "R22",
    "hex": "#6C372F"
  },
  {
    "id": "R23",
    "hex": "#FEB872"
  },
  {
    "id": "R24",
    "hex": "#F3C1C0"
  },
  {
    "id": "R25",
    "hex": "#C9675E"
  },
  {
    "id": "R26",
    "hex": "#D293BE"
  },
  {
    "id": "R27",
    "hex": "#EA8CB1"
  },
  {
    "id": "R28",
    "hex": "#9C87D6"
  },
  {
    "id": "T1",
    "hex": "#FFFFFF"
  },
  {
    "id": "Y1",
    "hex": "#FD6FB4"
  },
  {
    "id": "Y2",
    "hex": "#FEB481"
  },
  {
    "id": "Y3",
    "hex": "#D7FAA0"
  },
  {
    "id": "Y4",
    "hex": "#8BDBFA"
  },
  {
    "id": "Y5",
    "hex": "#E987EA"
  },
  {
    "id": "ZG1",
    "hex": "#DAABB3"
  },
  {
    "id": "ZG2",
    "hex": "#D6AA87"
  },
  {
    "id": "ZG3",
    "hex": "#C1BD8D"
  },
  {
    "id": "ZG4",
    "hex": "#96869F"
  },
  {
    "id": "ZG5",
    "hex": "#8490A6"
  },
  {
    "id": "ZG6",
    "hex": "#94BFE2"
  },
  {
    "id": "ZG7",
    "hex": "#E2A9D2"
  },
  {
    "id": "ZG8",
    "hex": "#AB91C0"
  }
];

const COLORS_EXCEL = [
  { "id": "A1", "hex": "#FAF5CD" },
  { "id": "B1", "hex": "#DFF13B" },
  { "id": "C1", "hex": "#F0FEE4" },
  { "id": "D1", "hex": "#ACB7EF" },
  { "id": "E1", "hex": "#F6D4CB" },
  { "id": "F1", "hex": "#FE9381" },
  { "id": "G1", "hex": "#FFE4D3" },
  { "id": "H1", "hex": "#FFFFFF" },
  { "id": "M1", "hex": "#BBC6B6" },
  { "id": "A2", "hex": "#FCFED6" },
  { "id": "B2", "hex": "#64F343" },
  { "id": "C2", "hex": "#ABF8FE" },
  { "id": "D2", "hex": "#868DD3" },
  { "id": "E2", "hex": "#FCC1DD" },
  { "id": "F2", "hex": "#F63D4B" },
  { "id": "G2", "hex": "#FCC6AC" },
  { "id": "H2", "hex": "#FBFBFB" },
  { "id": "M2", "hex": "#909994" },
  { "id": "A3", "hex": "#FCFF92" },
  { "id": "B3", "hex": "#A1F586" },
  { "id": "C3", "hex": "#1AE0F7" },
  { "id": "D3", "hex": "#3554AF" },
  { "id": "E3", "hex": "#F6BDE8" },
  { "id": "F3", "hex": "#EE4E3E" },
  { "id": "G3", "hex": "#F1C4A5" },
  { "id": "H3", "hex": "#B4B4B4" },
  { "id": "M3", "hex": "#697E80" },
  { "id": "A4", "hex": "#F7EC5C" },
  { "id": "B4", "hex": "#5FDF34" },
  { "id": "C4", "hex": "#44CDFB" },
  { "id": "D4", "hex": "#162D7B" },
  { "id": "E4", "hex": "#E8649E" },
  { "id": "F4", "hex": "#FB2A40" },
  { "id": "G4", "hex": "#DCB387" },
  { "id": "H4", "hex": "#878787" },
  { "id": "M4", "hex": "#E0D4BC" },
  { "id": "A5", "hex": "#F0D83A" },
  { "id": "B5", "hex": "#39E158" },
  { "id": "C5", "hex": "#06AADF" },
  { "id": "D5", "hex": "#B34EC6" },
  { "id": "E5", "hex": "#F0569F" },
  { "id": "F5", "hex": "#E10328" },
  { "id": "G5", "hex": "#E7B34E" },
  { "id": "H5", "hex": "#464648" },
  { "id": "M5", "hex": "#D1CCAF" },
  { "id": "A6", "hex": "#FDA951" },
  { "id": "B6", "hex": "#64E0A4" },
  { "id": "C6", "hex": "#54A7E9" },
  { "id": "D6", "hex": "#B37BDC" },
  { "id": "E6", "hex": "#EB4172" },
  { "id": "F6", "hex": "#913635" },
  { "id": "G6", "hex": "#E3A014" },
  { "id": "H6", "hex": "#2C2C2C" },
  { "id": "M6", "hex": "#B0AA86" },
  { "id": "A7", "hex": "#FA8C4F" },
  { "id": "B7", "hex": "#3EAE7C" },
  { "id": "C7", "hex": "#3977CA" },
  { "id": "D7", "hex": "#8758A9" },
  { "id": "E7", "hex": "#C53674" },
  { "id": "F7", "hex": "#911932" },
  { "id": "G7", "hex": "#985C3A" },
  { "id": "H7", "hex": "#010101" },
  { "id": "M7", "hex": "#B0A796" },
  { "id": "A8", "hex": "#FBDA4D" },
  { "id": "B8", "hex": "#1D9B54" },
  { "id": "C8", "hex": "#0F52BD" },
  { "id": "D8", "hex": "#E3D2FE" },
  { "id": "E8", "hex": "#FDDBE9" },
  { "id": "F8", "hex": "#BB0126" },
  { "id": "G8", "hex": "#713D2F" },
  { "id": "H8", "hex": "#E7D6DC" },
  { "id": "M8", "hex": "#AE7F82" },
  { "id": "A9", "hex": "#F79D5F" },
  { "id": "B9", "hex": "#2A5037" },
  { "id": "C9", "hex": "#3349C3" },
  { "id": "D9", "hex": "#D5B9F4" },
  { "id": "E9", "hex": "#E376C7" },
  { "id": "F9", "hex": "#E0677A" },
  { "id": "G9", "hex": "#E4B685" },
  { "id": "H9", "hex": "#EFEDEE" },
  { "id": "M9", "hex": "#A68862" },
  { "id": "A10", "hex": "#F47E38" },
  { "id": "B10", "hex": "#9AD1BA" },
  { "id": "C10", "hex": "#3CBCE3" },
  { "id": "D10", "hex": "#301A49" },
  { "id": "E10", "hex": "#D13B95" },
  { "id": "F10", "hex": "#874628" },
  { "id": "G10", "hex": "#DA8C42" },
  { "id": "H10", "hex": "#EBEBEB" },
  { "id": "M10", "hex": "#C4B3BB" },
  { "id": "A11", "hex": "#FEDB99" },
  { "id": "B11", "hex": "#627032" },
  { "id": "C11", "hex": "#2ADED3" },
  { "id": "D11", "hex": "#BEB9E2" },
  { "id": "E11", "hex": "#F7DAD4" },
  { "id": "F11", "hex": "#592323" },
  { "id": "G11", "hex": "#DAC898" },
  { "id": "H11", "hex": "#CDCDCD" },
  { "id": "M11", "hex": "#9E7592" },
  { "id": "A12", "hex": "#FDA276" },
  { "id": "B12", "hex": "#1A6E3D" },
  { "id": "C12", "hex": "#1E334E" },
  { "id": "D12", "hex": "#DC99CE" },
  { "id": "E12", "hex": "#F693BF" },
  { "id": "F12", "hex": "#F3536B" },
  { "id": "G12", "hex": "#FEC993" },
  { "id": "H12", "hex": "#FDF6EE" },
  { "id": "M12", "hex": "#644A51" },
  { "id": "A13", "hex": "#FEC667" },
  { "id": "B13", "hex": "#C8E87D" },
  { "id": "C13", "hex": "#CDE7FE" },
  { "id": "D13", "hex": "#B5038D" },
  { "id": "E13", "hex": "#B5016A" },
  { "id": "F13", "hex": "#F45C45" },
  { "id": "G13", "hex": "#B2714B" },
  { "id": "H13", "hex": "#F4EFD1" },
  { "id": "M13", "hex": "#C79266" },
  { "id": "A14", "hex": "#F75842" },
  { "id": "B14", "hex": "#ABE84F" },
  { "id": "C14", "hex": "#D5FCF7" },
  { "id": "D14", "hex": "#862993" },
  { "id": "E14", "hex": "#FAD4BF" },
  { "id": "F14", "hex": "#FCADB2" },
  { "id": "G14", "hex": "#8B684C" },
  { "id": "H14", "hex": "#CED7D4" },
  { "id": "M14", "hex": "#C27464" },
  { "id": "A15", "hex": "#FBF65E" },
  { "id": "B15", "hex": "#305335" },
  { "id": "C15", "hex": "#21C5C4" },
  { "id": "D15", "hex": "#2F1F8C" },
  { "id": "E15", "hex": "#F5C9CA" },
  { "id": "F15", "hex": "#D50527" },
  { "id": "G15", "hex": "#F6F8E3" },
  { "id": "H15", "hex": "#9AA6A6" },
  { "id": "M15", "hex": "#747D7A" },
  { "id": "A16", "hex": "#FEFF97" },
  { "id": "B16", "hex": "#C0ED4F" },
  { "id": "C16", "hex": "#1858A2" },
  { "id": "D16", "hex": "#E2E4F0" },
  { "id": "E16", "hex": "#FBF4EC" },
  { "id": "F16", "hex": "#F8C0A9" },
  { "id": "G16", "hex": "#F2D8C1" },
  { "id": "H16", "hex": "#1B1213" },
  { "id": "A17", "hex": "#FDE173" },
  { "id": "B17", "hex": "#9EB33E" },
  { "id": "C17", "hex": "#02D1F3" },
  { "id": "D17", "hex": "#C7D3F9" },
  { "id": "E17", "hex": "#F7E3EC" },
  { "id": "F17", "hex": "#E89B7D" },
  { "id": "G17", "hex": "#77544E" },
  { "id": "H17", "hex": "#F0EEEF" },
  { "id": "A18", "hex": "#FCBF80" },
  { "id": "B18", "hex": "#E6ED4F" },
  { "id": "C18", "hex": "#213244" },
  { "id": "D18", "hex": "#9A64B8" },
  { "id": "E18", "hex": "#F9C8DB" },
  { "id": "F18", "hex": "#D07F4A" },
  { "id": "G18", "hex": "#FFE3D5" },
  { "id": "H18", "hex": "#FCFFF6" },
  { "id": "A19", "hex": "#FD7E77" },
  { "id": "B19", "hex": "#26B78E" },
  { "id": "C19", "hex": "#18869D" },
  { "id": "D19", "hex": "#D8C2D9" },
  { "id": "E19", "hex": "#F6BBD1" },
  { "id": "F19", "hex": "#BE454A" },
  { "id": "G19", "hex": "#DD7D41" },
  { "id": "H19", "hex": "#F2EEE5" },
  { "id": "A20", "hex": "#F9D66E" },
  { "id": "B20", "hex": "#CBECCF" },
  { "id": "C20", "hex": "#1A70A9" },
  { "id": "D20", "hex": "#9A35AD" },
  { "id": "E20", "hex": "#D7C6CE" },
  { "id": "F20", "hex": "#C69495" },
  { "id": "G20", "hex": "#A5452F" },
  { "id": "H20", "hex": "#96A09F" },
  { "id": "A21", "hex": "#FAE393" },
  { "id": "B21", "hex": "#18616A" },
  { "id": "C21", "hex": "#BCDDFC" },
  { "id": "D21", "hex": "#940595" },
  { "id": "E21", "hex": "#C09DA4" },
  { "id": "F21", "hex": "#F2B8C6" },
  { "id": "G21", "hex": "#B38561" },
  { "id": "H21", "hex": "#F8FBE6" },
  { "id": "A22", "hex": "#EDF878" },
  { "id": "B22", "hex": "#0A4241" },
  { "id": "C22", "hex": "#6BB1BB" },
  { "id": "D22", "hex": "#38389A" },
  { "id": "E22", "hex": "#B38C9F" },
  { "id": "F22", "hex": "#F7C3D0" },
  { "id": "H22", "hex": "#CACAD2" },
  { "id": "A23", "hex": "#E4C8BA" },
  { "id": "B23", "hex": "#343B1A" },
  { "id": "C23", "hex": "#C8E2FD" },
  { "id": "D23", "hex": "#EADBF8" },
  { "id": "E23", "hex": "#937D8A" },
  { "id": "F23", "hex": "#ED806C" },
  { "id": "H23", "hex": "#9B9C94" },
  { "id": "A24", "hex": "#F3F6A9" },
  { "id": "B24", "hex": "#E8FAA6" },
  { "id": "C24", "hex": "#7EC5F9" },
  { "id": "D24", "hex": "#768AE1" },
  { "id": "E24", "hex": "#DEBEE5" },
  { "id": "F24", "hex": "#E09DAF" },
  { "id": "A25", "hex": "#FFD785" },
  { "id": "B25", "hex": "#4E846D" },
  { "id": "C25", "hex": "#A9E8E0" },
  { "id": "D25", "hex": "#4950C2" },
  { "id": "F25", "hex": "#E84854" },
  { "id": "A26", "hex": "#FFC734" },
  { "id": "B26", "hex": "#907C35" },
  { "id": "C26", "hex": "#42ADCF" },
  { "id": "D26", "hex": "#D6C6EB" },
  { "id": "B27", "hex": "#D0E0AF" },
  { "id": "C27", "hex": "#D0DEF9" },
  { "id": "B28", "hex": "#9EE5BB" },
  { "id": "C28", "hex": "#BDCEE8" },
  { "id": "B29", "hex": "#C6DF5F" },
  { "id": "C29", "hex": "#364A89" },
  { "id": "B30", "hex": "#E3FBB1" },
  { "id": "B31",
    "hex": "#B4E691" },
  { "id": "B32", "hex": "#92B060" }
];

let MARD_COLORS = COLORS_ORIGINAL;

// ========== 图片处理模块 ==========

class PixelArtConverter {
    constructor() {
        this.originalImage = null;
        this.pixelData = null;
        this.colorPalette = [];
        this.colorMap = new Map();
        this.pixelSize = 16;
        this.gridWidth = 0;
        this.gridHeight = 0;
    }

    /**
     * 加载图片
     * @param {File} file - 图片文件
     * @returns {Promise<Image>}
     */
    loadImage(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (e) => {
                const img = new Image();
                img.onload = () => {
                    this.originalImage = img;
                    resolve(img);
                };
                img.onerror = reject;
                img.src = e.target.result;
            };
            reader.onerror = reject;
            reader.readAsDataURL(file);
        });
    }

    /**
     * 找到最接近的 MARD 颜色
     * @param {number} r 
     * @param {number} g 
     * @param {number} b 
     * @returns {Object} 
     */
    findNearestColor(r, g, b) {
        let minDistance = Infinity;
        let nearest = MARD_COLORS[0];

        for (const color of MARD_COLORS) {
            // 解析 HEX
            const cr = parseInt(color.hex.slice(1, 3), 16);
            const cg = parseInt(color.hex.slice(3, 5), 16);
            const cb = parseInt(color.hex.slice(5, 7), 16);

            // 欧氏距离 (简单版)
            const dist = Math.sqrt(
                Math.pow(r - cr, 2) * 0.3 + 
                Math.pow(g - cg, 2) * 0.59 + 
                Math.pow(b - cb, 2) * 0.11
            );

            if (dist < minDistance) {
                minDistance = dist;
                nearest = color;
            }
        }
        return nearest;
    }

    /**
     * 转换图片为像素网格
     * @param {number} pixelSize - 每个像素块的大小（像素）
     * @param {boolean} mirror - 是否镜像
     */
    convert(pixelSize = 16, mirror = false) {
        if (!this.originalImage) return false;

        this.pixelSize = pixelSize;

        // 计算网格尺寸
        this.gridWidth = Math.ceil(this.originalImage.width / pixelSize);
        this.gridHeight = Math.ceil(this.originalImage.height / pixelSize);

        // 创建临时canvas获取图片像素数据
        const tempCanvas = document.createElement('canvas');
        tempCanvas.width = this.gridWidth;
        tempCanvas.height = this.gridHeight;
        const ctx = tempCanvas.getContext('2d');

        // 将原图像素化缩放到网格大小
        ctx.imageSmoothingEnabled = false;

        ctx.save();
        if (mirror) {
            ctx.translate(this.gridWidth, 0);
            ctx.scale(-1, 1);
        }

        ctx.drawImage(
            this.originalImage,
            0, 0,
            this.originalImage.width,
            this.originalImage.height,
            0, 0,
            this.gridWidth,
            this.gridHeight
        );
        ctx.restore();

        // 获取像素数据
        const imageData = ctx.getImageData(0, 0, this.gridWidth, this.gridHeight);
        const data = imageData.data;

        // 初始化像素网格
        this.pixelData = [];
        this.colorPalette = [];
        this.colorMap.clear();

        // 处理每个像素
        for (let i = 0; i < data.length; i += 4) {
            const r = data[i];
            const g = data[i + 1];
            const b = data[i + 2];
            
            // 找到对应的 MARD 色号
            const mardColor = this.findNearestColor(r, g, b);
            const colorKey = mardColor.id; // 使用 ID 作为 Key

            let colorIndex = this.colorMap.get(colorKey);

            // 如果这个颜色还没在调色板中，添加它
            if (colorIndex === undefined) {
                colorIndex = this.colorPalette.length;
                this.colorPalette.push({
                    id: mardColor.id,
                    hex: mardColor.hex,
                    count: 0
                });
                this.colorMap.set(colorKey, colorIndex);
            }

            this.colorPalette[colorIndex].count++;
            this.pixelData.push(colorIndex);
        }

        // 按使用频率排序调色板
        this.sortPalette();

        return true;
    }

    /**
     * 将RGBA值转换为HEX颜色
     * @param {number} r - 红色分量
     * @param {number} g - 绿色分量
     * @param {number} b - 蓝色分量
     * @param {number} a - 透明度
     * @returns {string}
     */
    rgbaToHex(r, g, b, a) {
        const toHex = (n) => {
            const hex = n.toString(16);
            return hex.length === 1 ? '0' + hex : hex;
        };

        if (a < 255) {
            return `#${toHex(r)}${toHex(g)}${toHex(b)}${toHex(a)}`.toUpperCase();
        }
        return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
    }

    /**
     * 按使用频率排序调色板
     */
    sortPalette() {
        // 按使用频率从高到低排序
        const sortedPalette = this.colorPalette
            .map((color, index) => ({ ...color, oldIndex: index }))
            .sort((a, b) => b.count - a.count);

        // 创建索引映射
        const indexMap = new Map();
        sortedPalette.forEach((color, newIndex) => {
            indexMap.set(color.oldIndex, newIndex);
        });

        // 更新像素数据中的颜色索引
        this.pixelData = this.pixelData.map(oldIndex => indexMap.get(oldIndex));

        // 更新调色板
        this.colorPalette = sortedPalette.map(({ oldIndex, ...color }) => color);

        // 重建颜色映射
        this.colorMap.clear();
        this.colorPalette.forEach((color, index) => {
            this.colorMap.set(color.id, index);
        });
    }

    /**
     * 渲染像素网格到canvas
     * @param {HTMLCanvasElement} canvas - 目标canvas
     * @param {boolean} showLabels - 是否显示色号标签
     * @param {boolean} showGridLines - 是否显示辅助网格线
     */
    render(canvas, showLabels = true, showGridLines = false) {
        if (!this.pixelData || this.pixelData.length === 0) return false;

        // 如果需要显示标签且原始像素小于32，则放大渲染尺寸以保证文字清晰度
        let renderScale = this.pixelSize;
        if (showLabels && this.pixelSize >= 10) {
            renderScale = Math.max(this.pixelSize, 32);
        }

        // 标尺区域大小 (留出一行一列的空间)
        const rulerSize = Math.max(20, renderScale);

        canvas.width = this.gridWidth * renderScale + rulerSize;
        canvas.height = this.gridHeight * renderScale + rulerSize;

        const ctx = canvas.getContext('2d');
        ctx.imageSmoothingEnabled = false;

        // 填充白色背景
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // 绘制标尺数字背景和边框
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        const fontSize = Math.min(Math.floor(rulerSize * 0.5), 14);
        ctx.font = `bold ${fontSize}px "Quicksand", "Segoe UI", Roboto, Helvetica, Arial, sans-serif`;
        
        const rulerBgColor = '#F0FAF9';   // 清新薄荷淡背景
        const rulerBorderColor = '#D1E8E2'; // 柔和边框
        const rulerTextColor = '#6A7B8C';   // 品牌文字色

        ctx.lineWidth = 1;

        // 顶部标尺 (列号)
        for (let x = 0; x < this.gridWidth; x++) {
            const rectX = rulerSize + x * renderScale;
            const rectY = 0;
            const rectW = renderScale;
            const rectH = rulerSize;

            // 背景
            ctx.fillStyle = rulerBgColor;
            ctx.fillRect(rectX, rectY, rectW, rectH);
            
            // 边框
            ctx.strokeStyle = rulerBorderColor;
            ctx.strokeRect(rectX, rectY, rectW, rectH);
            
            // 文字
            ctx.fillStyle = rulerTextColor;
            ctx.fillText(
                x + 1,
                rectX + rectW / 2,
                rectY + rectH / 2
            );
        }

        // 左侧标尺 (行号)
        for (let y = 0; y < this.gridHeight; y++) {
            const rectX = 0;
            const rectY = rulerSize + y * renderScale;
            const rectW = rulerSize;
            const rectH = renderScale;

            // 背景
            ctx.fillStyle = rulerBgColor;
            ctx.fillRect(rectX, rectY, rectW, rectH);
            
            // 边框
            ctx.strokeStyle = rulerBorderColor;
            ctx.strokeRect(rectX, rectY, rectW, rectH);
            
            // 文字
            ctx.fillStyle = rulerTextColor;
            ctx.fillText(
                y + 1,
                rectX + rectW / 2,
                rectY + rectH / 2
            );
        }

        // 左上角空白区域
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, rulerSize, rulerSize);
        ctx.strokeStyle = rulerBorderColor;
        ctx.strokeRect(0, 0, rulerSize, rulerSize);

        // 绘制像素块区域偏移
        const startX = rulerSize;
        const startY = rulerSize;

        // 绘制像素块
        for (let y = 0; y < this.gridHeight; y++) {
            for (let x = 0; x < this.gridWidth; x++) {
                const index = y * this.gridWidth + x;
                const colorIndex = this.pixelData[index];
                const color = this.colorPalette[colorIndex];

                const drawX = startX + x * renderScale;
                const drawY = startY + y * renderScale;

                // 绘制颜色块
                ctx.fillStyle = this.hexToRgb(color.hex);
                ctx.fillRect(drawX, drawY, renderScale, renderScale);

                // 绘制边框
                // 边框宽度也随比例调整，但最细为1px
                const borderWidth = Math.max(1, renderScale / 20);
                ctx.strokeStyle = '#ccc';
                ctx.lineWidth = borderWidth;
                ctx.strokeRect(drawX, drawY, renderScale, renderScale);

                // 显示色号标签
                if (showLabels && this.pixelSize >= 10) {
                    ctx.fillStyle = this.getContrastColor(color.hex);
                    // 调整字体大小比例，使其更清晰
                    // 对于32px方块，大约使用11-12px字体
                    const labelFontSize = Math.floor(renderScale * 0.4);
                    // 使用 sans-serif 保证清晰度，Arial 有时在某些系统上渲染较细
                    ctx.font = `bold ${labelFontSize}px "Segoe UI", Roboto, Helvetica, Arial, sans-serif`;
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    
                    ctx.fillText(
                        color.id,
                        drawX + renderScale / 2,
                        drawY + renderScale / 2
                    );
                }
            }
        }

        // 绘制辅助网格线 (每5格细红线，每10格粗红线)
        if (showGridLines) {
            ctx.lineCap = 'butt';

            // 垂直线
            for (let x = 1; x < this.gridWidth; x++) {
                if (x % 5 === 0) {
                     const isCoarse = x % 25 === 0;
                     // 25格粗线(显著加粗)，5格细线(明显加粗)
                     const gridLineWidth = isCoarse ? Math.max(5, renderScale / 4) : Math.max(1.5, renderScale / 15);
                     
                     ctx.lineWidth = gridLineWidth;
                     // 提高不透明度，增强对比
                     ctx.strokeStyle = isCoarse ? 'rgba(255, 0, 0, 0.95)' : 'rgba(255, 0, 0, 0.75)';
                     
                     ctx.beginPath();
                     ctx.moveTo(startX + x * renderScale, startY);
                     ctx.lineTo(startX + x * renderScale, canvas.height);
                     ctx.stroke();
                }
            }
            
            // 水平线
            for (let y = 1; y < this.gridHeight; y++) {
                 if (y % 5 === 0) {
                     const isCoarse = y % 25 === 0;
                     const gridLineWidth = isCoarse ? Math.max(5, renderScale / 4) : Math.max(1.5, renderScale / 15);
                     
                     ctx.lineWidth = gridLineWidth;
                     ctx.strokeStyle = isCoarse ? 'rgba(255, 0, 0, 0.95)' : 'rgba(255, 0, 0, 0.75)';
                     
                     ctx.beginPath();
                     ctx.moveTo(startX, startY + y * renderScale);
                     ctx.lineTo(canvas.width, startY + y * renderScale);
                     ctx.stroke();
                 }
            }
        }

        return true;
    }

    /**
     * HEX颜色转为RGB样式字符串
     * @param {string} hex - HEX颜色值
     * @returns {string}
     */
    hexToRgb(hex) {
        const result = hex.match(/\w\w/g);
        if (result.length === 3) {
            return `rgb(${parseInt(result[0], 16)}, ${parseInt(result[1], 16)}, ${parseInt(result[2], 16)})`;
        } else if (result.length === 4) {
            const r = parseInt(result[0], 16);
            const g = parseInt(result[1], 16);
            const b = parseInt(result[2], 16);
            const a = parseInt(result[3], 16) / 255;
            return `rgba(${r}, ${g}, ${b}, ${a})`;
        }
        return hex;
    }

    /**
     * 根据背景色获取对比色（黑或白）
     * @param {string} hex - HEX颜色值
     * @returns {string}
     */
    getContrastColor(hex) {
        const result = hex.match(/\w\w/g);
        const r = parseInt(result[0], 16);
        const g = parseInt(result[1], 16);
        const b = parseInt(result[2], 16);
        
        // 使用相对亮度公式
        const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
        return luminance > 0.5 ? '#000000' : '#FFFFFF';
    }

    /**
     * 获取调色板数据
     * @returns {Array}
     */
    getPalette() {
        return this.colorPalette;
    }

    /**
     * 导出数据为JSON格式
     * @returns {Object}
     */
    exportData() {
        return {
            gridWidth: this.gridWidth,
            gridHeight: this.gridHeight,
            pixelSize: this.pixelSize,
            palette: this.colorPalette,
            pixelData: this.pixelData,
            imageInfo: {
                originalWidth: this.originalImage.width,
                originalHeight: this.originalImage.height
            }
        };
    }
}

// ========== UI 控制模块 ==========

const converter = new PixelArtConverter();
let isConverted = false;

// DOM 元素
const imageInput = document.getElementById('imageInput');
const pixelSizeSlider = document.getElementById('pixelSize');
const pixelSizeValue = document.getElementById('pixelSizeValue');
const paletteSelect = document.getElementById('paletteSelect');
const showLegendCheckbox = document.getElementById('showLegend');
const showGridLinesCheckbox = document.getElementById('showGridLines');
const mirrorCheckbox = document.getElementById('mirrorImage');
const convertBtn = document.getElementById('convertBtn');
const downloadBtn = document.getElementById('downloadBtn');
const downloadJsonBtn = document.getElementById('downloadJsonBtn');
const previewCanvas = document.getElementById('previewCanvas');
const pixelCanvas = document.getElementById('pixelCanvas');
const paletteContainer = document.getElementById('paletteContainer');
const colorUsageCount = document.getElementById('colorUsageCount');
const totalBlockCount = document.getElementById('totalBlockCount');
const noImageMsg = document.getElementById('noImageMsg');
const noResultMsg = document.getElementById('noResultMsg');

// ========== 事件监听 ==========

imageInput.addEventListener('change', handleImageUpload);
pixelSizeSlider.addEventListener('input', handlePixelSizeChange);
convertBtn.addEventListener('click', handleConvert);
downloadBtn.addEventListener('click', handleDownload);
downloadJsonBtn.addEventListener('click', handleDownloadJson);
showLegendCheckbox.addEventListener('change', handleOptionChange);
showGridLinesCheckbox.addEventListener('change', handleOptionChange);
paletteSelect.addEventListener('change', handlePaletteChange);

pixelCanvas.addEventListener('click', () => {
    pixelCanvas.classList.toggle('zoomed');
});

// ========== 事件处理函数 ==========

function handlePaletteChange(e) {
    const value = e.target.value;
    if (value === 'excel') {
        MARD_COLORS = COLORS_EXCEL;
    } else {
        MARD_COLORS = COLORS_ORIGINAL;
    }
    
    // 如果已经转换过，重新转换以应用新色板（如果用户没有重新上传图片，convert会使用上一次的图片吗？
    // convert() 依赖 this.originalImage, 这在PixelArtConverter实例中是持久的。
    // 但是 handleConvert() 重新从 slider 读取 pixelSize。
    // 我们在这里直接调用 handleConvert() 可能是个好主意，如果用户已经转换过的话。
    if (isConverted) {
        handleConvert();
    }
}

async function handleImageUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    try {
        const img = await converter.loadImage(file);
        drawPreview(img);
        
        convertBtn.disabled = false;
        isConverted = false;
        downloadBtn.disabled = true;
        downloadJsonBtn.disabled = true;
        
        pixelCanvas.width = 0;
        pixelCanvas.height = 0;
        noResultMsg.style.display = 'block';
        paletteContainer.innerHTML = '';
        colorUsageCount.textContent = '0';
    } catch (error) {
        alert('图片加载失败: ' + error.message);
    }
}

function drawPreview(img) {
    const canvas = previewCanvas;
    const maxWidth = 400;
    const maxHeight = 400;
    
    let width = img.width;
    let height = img.height;
    
    if (width > maxWidth || height > maxHeight) {
        const ratio = Math.min(maxWidth / width, maxHeight / height);
        width *= ratio;
        height *= ratio;
    }
    
    canvas.width = width;
    canvas.height = height;
    
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0, width, height);
    
    noImageMsg.style.display = 'none';
}

function handlePixelSizeChange(e) {
    pixelSizeValue.textContent = e.target.value;
}

function handleOptionChange() {
    if (isConverted) {
        converter.render(pixelCanvas, showLegendCheckbox.checked, showGridLinesCheckbox.checked);
    }
}

function handleConvert() {
    const pixelSize = parseInt(pixelSizeSlider.value);
    const mirror = mirrorCheckbox.checked;
    
    if (!converter.convert(pixelSize, mirror)) {
        alert('转换失败！');
        return;
    }
    
    isConverted = true;
    
    // 渲染像素网格
    converter.render(pixelCanvas, showLegendCheckbox.checked, showGridLinesCheckbox.checked);
    noResultMsg.style.display = 'none';
    
    // 更新调色板显示
    updatePaletteDisplay();
    
    downloadBtn.disabled = false;
    downloadJsonBtn.disabled = false;
}

function updatePaletteDisplay() {
    const palette = converter.getPalette();
    
    paletteContainer.innerHTML = '';
    colorUsageCount.textContent = palette.length;

    // 计算总块数
    const totalBlocks = palette.reduce((sum, color) => sum + color.count, 0);
    if (totalBlockCount) {
        totalBlockCount.textContent = totalBlocks;
    }
    
    palette.forEach((color) => {
        // 创建卡片
        const colorItem = document.createElement('div');
        colorItem.className = 'color-card';
        colorItem.title = `使用次数: ${color.count}`;
        
        // 颜色方块
        const square = document.createElement('div');
        square.className = 'color-card-square';
        square.style.backgroundColor = color.hex;
        
        // 详情部分
        const details = document.createElement('div');
        details.className = 'color-card-details';
        
        // 第一行：小红色ID
        const smallId = document.createElement('div');
        smallId.className = 'color-card-small-id';
        smallId.textContent = '#' + color.id;
        
        // 第二行：大黑色ID
        const bigId = document.createElement('div');
        bigId.className = 'color-card-big-id';
        bigId.textContent = color.id;
        
        // 第三行：Hash + HEX
        const hexRow = document.createElement('div');
        hexRow.className = 'color-card-hex-row';
        
        const hexValue = document.createElement('span');
        hexValue.className = 'color-card-hex-val';
        hexValue.textContent = color.hex;
        
        hexRow.appendChild(hexValue);

        // 第四行：数量统计
        const countRow = document.createElement('div');
        countRow.className = 'color-card-count-row';
        countRow.textContent = `× ${color.count}`;
        countRow.style.fontSize = '12px';
        countRow.style.color = '#666';
        countRow.style.marginTop = '2px';
        countRow.style.textAlign = 'right';
        
        // 组装
        details.appendChild(smallId);
        details.appendChild(bigId);
        details.appendChild(hexRow);
        details.appendChild(countRow);
        
        colorItem.appendChild(square);
        colorItem.appendChild(details);
        
        paletteContainer.appendChild(colorItem);
    });
}

function handleDownload() {
    if (!isConverted) return;
    
    const link = document.createElement('a');
    link.href = pixelCanvas.toDataURL('image/png');
    link.download = `pixel-art-${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function handleDownloadJson() {
    if (!isConverted) return;
    
    const data = converter.exportData();
    const json = JSON.stringify(data, null, 2);
    
    const link = document.createElement('a');
    link.href = 'data:application/json;charset=utf-8,' + encodeURIComponent(json);
    link.download = `pixel-data-${Date.now()}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
