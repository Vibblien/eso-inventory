import './App.css';
import React from 'react';

// ? for tey
// ? github walk-through for Bethany collab
// ? Ring and weapon IFs

// * else if = otherwise if
// * shorthand function everywhere, practice arrow
// * everything that references props or state/setState must go in a component
// * use the function keyword when declaring a component or a stand-alone function.
// * use the anonymous declaration (fat arrow) when declaring functions inside of a component.
// * anything that doesnt depend on props or just takes a
//* generic argument can be outside of App

// TODO -
// c̶h̶a̶n̶g̶e̶ s̶p̶a̶n̶s̶ t̶o̶ c̶s̶s̶-̶a̶b̶l̶e̶ (̶f̶l̶e̶x̶)̶,̶
// g̶e̶t̶ r̶i̶d̶ o̶f̶ c̶l̶a̶s̶s̶n̶a̶m̶e̶s̶ w̶/̶o̶ u̶s̶e̶,̶
// TODO center nav buttons
// a̶d̶d̶ s̶c̶r̶o̶l̶l̶ f̶u̶n̶c̶t̶i̶o̶n̶ t̶o̶ i̶n̶v̶e̶n̶t̶o̶r̶y̶ w̶i̶n̶d̶o̶w̶
// TODO add states to accessories and weapon slots
// TODO finish icons today
// TODO add stat variables
// ? add stat effects to item objects
// TODO stat functionality when equipped/unequipped.

function InvItem(props) {
  return (
    <div
      className="item"
      onClick={() => {
        props.equipItem({
          pic: props.pic,
          title: props.title,
          value: props.value,
          type: props.type,
        });
      }}
    >
      <div>{props.pic}</div>
      <div className="firstcap">{props.title}</div>
      <div>{props.value}</div>
    </div>
  );
}

function App() {
  //* USE STATES FOR EACH APPAREL SLOT
  const [headSlot, setHeadSlot] = React.useState('head (empty)');
  const [shoulderSlot, setShoulderSlot] = React.useState('shoulder (empty)');
  const [chestSlot, setChestSlot] = React.useState('chest (empty)');
  const [handsSlot, setHandsSlot] = React.useState('hands (empty)');
  const [waistSlot, setWaistSlot] = React.useState('waist (empty)');
  const [legsSlot, setLegsSlot] = React.useState('legs (empty)');
  const [feetSlot, setFeetSlot] = React.useState('feet (empty)');

  //* USE STATES FOR ADDITIONAL SLOTS
  // TODO - RING1, RING2, MAIN, OFF,
  const [hangerSlot, setHangerSlot] = React.useState('hanger');
  const [neckSlot, setNeckSlot] = React.useState('neck');
  const [ring1Slot, setRing1Slot] = React.useState(null);
  const [ring2Slot, setRing2Slot] = React.useState(null);
  const [mainSlot, setMainSlot] = React.useState(null);
  const [offhandSlot, setOffhandSlot] = React.useState(null);
  const [poisonSlot, setPoisonSlot] = React.useState('poison');

  //* INVENTORY DECLARATION AND COMPONENT
  const inventory = [
    {
      type: 'ring',
      pic: 'XL',
      title: 'Ring of Life',
      value: '450',
      swiftness: '10',
    },
    { type: 'ring', pic: 'XF', title: 'Ring of Fire', value: '300' },
    { type: 'head', pic: 'X', title: 'Helm of Darkness', value: '40' },
    { type: 'shoulder', pic: 'X', title: 'Hell Shoulderpads', value: '30' },
    { type: 'chest', pic: 'X', title: "Warrior's Armor", value: '120' },
    { type: 'hands', pic: 'X', title: 'Gloves of Darkness', value: '500' },
    { type: 'waist', pic: 'X', title: 'Fire Belt', value: '5' },
    { type: 'legs', pic: 'X', title: "Soldier's Trousers", value: '75' },
    { type: 'feet', pic: 'X', title: 'Buccaneer Boots', value: '220' },
  ];

  //* EQUIP ITEM FUNCTION
  const equipItem = (props) => {
    const itemType = props.type;
    const itemPic = props.pic;

    if (itemType === 'head') {
      setHeadSlot(itemPic);
    }
    if (itemType === 'shoulder') {
      setShoulderSlot(itemPic);
    }
    if (itemType === 'chest') {
      setChestSlot(itemPic);
    }
    if (itemType === 'hands') {
      setHandsSlot(itemPic);
    }
    if (itemType === 'waist') {
      setWaistSlot(itemPic);
    }
    if (itemType === 'legs') {
      setLegsSlot(itemPic);
    }
    if (itemType === 'feet') {
      setFeetSlot(itemPic);
    }
    if (itemType === 'hanger') {
      setHangerSlot(itemPic);
    }
    if (itemType === 'neck') {
      setNeckSlot(itemPic);
    }

    if (itemType === 'ring') {
      if (ring1Slot == null) {
        setRing1Slot(itemPic);
      } else if (ring2Slot == null) {
        setRing2Slot(itemPic);
      } else {
        console.warn('ring slots full');
      }
    }

    if (itemType === 'weapon') {
      if (mainSlot == null) {
        setMainSlot(itemPic);
      } else if (offhandSlot == null) {
        setOffhandSlot(itemPic);
      } else {
        console.warn('weapon slots full');
      }
    }

    // if (itemType === 'weapon') {
    //   if (mainEquipped === null || mainEquipped === false) {
    //     mainEquipped = true;
    //     setMainSlot(itemPic);
    //   } else {
    //     if (offEquipped === null || offEquipped === false) {
    //       offEquipped = true;
    //       setOffhandSlot(itemPic);
    //     } else {
    //       alert('ALL WEAPON SLOTS ARE FULL');
    //     }
    //   }
    // }

    if (itemType === 'poison') {
      setPoisonSlot(itemPic);
    }
  };

  /**
   * UN-EQUIP FUNCTION
   */
  function unEquipItem(event) {
    const itemType = event.target.id;

    if (itemType === 'head') {
      setHeadSlot('head (empty)');
    }
    if (itemType === 'shoulder') {
      setShoulderSlot('shoulder (empty)');
    }
    if (itemType === 'chest') {
      setChestSlot('chest (empty)');
    }
    if (itemType === 'hands') {
      setHandsSlot('hands (empty)');
    }
    if (itemType === 'waist') {
      setWaistSlot('waist (empty)');
    }
    if (itemType === 'legs') {
      setLegsSlot('legs (empty)');
    }
    if (itemType === 'feet') {
      setFeetSlot('feet (empty)');
    }
  }

  return (
    <div className="app">
      <div className="area">
        <div className="navBar">
          <div className="levelDisplay">
            <div className="currentLevel">15</div>
            <div>
              <div className="levelText caps">level</div>
              <div className="progressBar">
                <div className="progressColor"></div>
              </div>
            </div>
          </div>
          <div className="navButtons">
            <div>
              <div className="plusStatus caps">plus status</div>
              <div className="crownAmount caps">#ofcrowns</div>
            </div>
            <div className="headerBtns">
              <button className="crownStore"></button>
              <button className="crownCrates"></button>
              <div className="divider"></div>
              <button className="inventory"></button>
              <button className="character"></button>
              <button className="skills"></button>
              <button className="journal"></button>
              <button className="collections"></button>
              <button className="map"></button>
              <button className="group"></button>
              <button className="friends"></button>
              <button className="guilds"></button>
              <button className="war"></button>
              <button className="mail"></button>
              <button className="notifications"></button>
              <button className="help"></button>
            </div>
          </div>
          <div className="emptySpan"></div>
        </div>
        <div className="hero">
          <div className="equipped">
            <h2 className="equippedTitle caps">equipped</h2>
            <div className="apparel">
              <h3 className="apparelTitle caps">apparel hidden</h3>
              <div onClick={unEquipItem} id="head">
                {headSlot}
              </div>
              <div onClick={unEquipItem} id="shoulder">
                {shoulderSlot}
              </div>
              <div id="body"></div>
              <div onClick={unEquipItem} id="chest">
                {chestSlot}
              </div>
              <div onClick={unEquipItem} id="hands">
                {handsSlot}
              </div>
              <div onClick={unEquipItem} id="waist">
                {waistSlot}
              </div>
              <div onClick={unEquipItem} id="legs">
                {legsSlot}
              </div>
              <div onClick={unEquipItem} id="feet">
                {feetSlot}
              </div>
            </div>
            <div className="statsTitle firstcap">
              <div className="section1">
                <h4>magika recovery</h4>
                <h4>maximum magika</h4>
                <h4>maximum health</h4>
                <h4>health recovery</h4>
                <h4>maximum stamina</h4>
                <h4>stamina recovery</h4>
              </div>
              <div className="section2">
                <h4>spell damage</h4>
                <h4>spell critical</h4>
                <h4>spell penetration</h4>
                <h4>weapon damage</h4>
                <h4>weapon critical</h4>
                <h4>physical penetration</h4>
              </div>
              <div className="section3">
                <h4>spell resistance</h4>
                <h4>physical resistance</h4>
                <h4>critical resistance</h4>
              </div>
            </div>
            <div className="statsValues">
              <div className="section1">
                <div>100</div>
                <div>100</div>
                <div>100</div>
                <div>100</div>
                <div>100</div>
                <div>100</div>
              </div>
              <div className="section2">
                <div>100</div>
                <div>100</div>
                <div>100</div>
                <div>100</div>
                <div>100</div>
                <div>100</div>
              </div>
              <div className="section3">
                <div>100</div>
                <div>100</div>
                <div>100</div>
              </div>
            </div>
            <div className="accessories">
              <h3 className="accessoryTitle caps">accessories</h3>
              <div className="hangerSlot">{hangerSlot}</div>
              <div className="neckSlot">{neckSlot}</div>
              <div className="ring1Slot">
                {ring1Slot != null ? ring1Slot : 'ring'}
              </div>
              <div className="ring2Slot">
                {ring2Slot != null ? ring2Slot : 'ring'}
              </div>
            </div>
            <div className="weapons">
              <h3 className="weaponTitle caps">weapons</h3>
              <div className="mainHand1">{mainSlot}</div>
              <div className="offHand1">{offhandSlot}</div>
              <div className="poison1">{poisonSlot}</div>
            </div>
          </div>
          <div className="displayHero">HERO DISPLAYED HERE</div>
          <div className="itemArea">
            <div className="headerRow">
              <div className="headerTitle caps">items</div>
              <button className="itemBtn"></button>
              <button className="bagBtn"></button>
              <button className="currencyBtn"></button>
              <button className="questItemBtn"></button>
              <button className="quickslotBtn"></button>
            </div>
            <div className="subRow">
              <div className="subRowTitle caps">armor: all</div>
              <button className="mainAllBtn"></button>
              <button className="weaponsBtn"></button>
              <button className="armorBtn"></button>
              <button className="jewelryBtn"></button>
              <button className="consumablesBtn"></button>
              <button className="materialsBtn"></button>
              <button className="furnishingsBtn"></button>
              <button className="companionBtn"></button>
              <button className="miscBtn"></button>
              <button className="junkBtn"></button>
            </div>
            <div className="searchRow">
              <button className="subAllBtn"></button>
              <input className="searchInput" />
            </div>
            <div className="itemDisplay">
              <div className="frozenBar">
                <div className="pictureColumn caps">icon</div>
                <div className="titleColumn caps">name</div>
                <div className="valueColumn caps">value</div>
              </div>
              <div className="inventorySpace">
                {inventory.map((item) => {
                  return InvItem({ ...item, equipItem });
                })}
              </div>
            </div>
            <div className="footerRow">
              <div className="invSpaceTitle firstcap">inventory space: </div>
              <div className="invTotal"> {inventory.length} / 70</div>
              <div className="goldTotal">6,168</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
