# MMM-BurnIn

![Alt text](/img/readme/burnin.gif "A preview of the MMM-BurnIn module.")

A module for the [MagicMirror²](https://github.com/MichMich/MagicMirror/) that flickers the screen to prevent a burn-in effect on your display.

## Installing

### Step 1 - Install the module
```javascript
cd ~/MagicMirror/modules
git clone https://github.com/werthdavid/MMM-BurnIn.git
```

### Step 2 - Add module to `~MagicMirror/config/config.js`
Add this configuration into `config.js` file's
```javascript
{
    module: "MMM-BurnIn",
    position: "bottom_bar", // whatever, doesn't render anything
    config: {
       updateInterval: 15, // in Minutes
       invertDuration: 5 // in Seconds
    }
}
```
## Updating
Go to the module’s folder inside MagicMirror modules folder and pull the latest version from GitHub and install:
```
git pull
```

## How it works

it basically inverts all colors on the screen for about 5 seconds. That's it.
