let data = [
    {
        "title": "Work",
        "timeframes": {
          "daily": {
            "current": 5,
            "previous": 7
          },
          "weekly": {
            "current": 32,
            "previous": 36
          },
          "monthly": {
            "current": 103,
            "previous": 128
          }
        }
      },
      {
        "title": "Play",
        "timeframes": {
          "daily": {
            "current": 1,
            "previous": 2
          },
          "weekly": {
            "current": 10,
            "previous": 8
          },
          "monthly": {
            "current": 23,
            "previous": 29
          }
        }
      },
      {
        "title": "Study",
        "timeframes": {
          "daily": {
            "current": 0,
            "previous": 1
          },
          "weekly": {
            "current": 4,
            "previous": 7
          },
          "monthly": {
            "current": 13,
            "previous": 19
          }
        }
      },
      {
        "title": "Exercise",
        "timeframes": {
          "daily": {
            "current": 1,
            "previous": 1
          },
          "weekly": {
            "current": 4,
            "previous": 5
          },
          "monthly": {
            "current": 11,
            "previous": 18
          }
        }
      },
      {
        "title": "Social",
        "timeframes": {
          "daily": {
            "current": 1,
            "previous": 3
          },
          "weekly": {
            "current": 5,
            "previous": 10
          },
          "monthly": {
            "current": 21,
            "previous": 23
          }
        }
      },
      {
        "title": "Self Care",
        "timeframes": {
          "daily": {
            "current": 0,
            "previous": 1
          },
          "weekly": {
            "current": 2,
            "previous": 2
          },
          "monthly": {
            "current": 7,
            "previous": 11
          }
        }
      }
]

const buttons = document.querySelectorAll(".btn-activity-tracker")

const activateButton = (button) => {
    buttons.forEach(b => b.classList.remove('active'))
    button.classList.add('active')
}

const clearPreviousActivityDisplay = () => {
    const activities = document.querySelectorAll(".timecard")
    activities.forEach(act => act.remove())
}

const displayData = (clickedOption) => {

    clearPreviousActivityDisplay()

    const activityTrackerContainer = document.querySelector(".container")

    const calcTimeframe = (option) => {
        if (option === 'daily') {
            return 'Yesterday'
        } else if (option === 'weekly') {
            return 'Last Week'
        } else if (option === 'monthly') {
            return 'Last Month'
        }
    }

    data.forEach(activity => {
        const name = activity.title
        const activityClass = name.toLowerCase().replace(' ', '-')
        const timeframeData = activity.timeframes[clickedOption]
        const previousTimeframe = calcTimeframe(clickedOption)
        const section = document.createElement('div')
        section.classList.add('timecard',`card-${activityClass}`)
        const cardToCreate = `
            <div class="card-base">
            <div class="card-top">
              <div class="top-group">
                <h3>${name}</h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="5" viewBox="0 0 16 5" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M4 2.5C4 3.88071 3.10457 5 2 5C0.895431 5 0 3.88071 0 2.5C0 1.11929 0.895431 0 2 0C3.10457 0 4 1.11929 4 2.5ZM10 2.5C10 3.88071 9.10457 5 8 5C6.89543 5 6 3.88071 6 2.5C6 1.11929 6.89543 0 8 0C9.10457 0 10 1.11929 10 2.5ZM14 5C15.1046 5 16 3.88071 16 2.5C16 1.11929 15.1046 0 14 0C12.8954 0 12 1.11929 12 2.5C12 3.88071 12.8954 5 14 5Z" fill="#BBC0FF"/>
                </svg>
              </div>
              <div class="time-group">
                <h1>${timeframeData.current}hrs</h1>
                <div class="bottom-group">
                  <span>${previousTimeframe} </span><span>- ${timeframeData.previous}hrs</span>
                </div>
              </div>
            </div
        `
        section.innerHTML = cardToCreate
        activityTrackerContainer.append(section)
    })
}

buttons.forEach(button => {
    button.addEventListener("click", () => {
        activateButton(button)
        const clickedOption = button.dataset.option // daily, weekly, monthly
        displayData(clickedOption)
    })
})

buttons[1].click()