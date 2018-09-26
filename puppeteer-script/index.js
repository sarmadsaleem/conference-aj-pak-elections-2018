'use strict'

const axios = require('axios')
const fs = require('fs')
const puppeteer = require('puppeteer')
const schedule = require('node-schedule')

/** function to take screenshot using puppeteer */
const screenshot = async (url, viewport, clipping, waitForSelector, outputPath) => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.setViewport(viewport)
  await page.goto(url)
  await page.waitForSelector(waitForSelector)
  await page.waitFor(1000)
  await page.screenshot({
    path: outputPath,
    fullPage: false,
    clip: clipping
  })
  browser.close()
}

/** function to save json response on disk */
const saveJson = async (source, destination) => {
  try {
    let response = await axios.get(source)
    console.log(response)
    response = JSON.stringify(response.data)
    await fs.writeFile(destination, response, err => {
      if (err) throw err
    })
  } catch (error) {
    console.error(error)
  }
}

// take screenshot every five minutes
const screenshotJob = schedule.scheduleJob('*/5 * * * *', () => {
  console.log(`Generating screenshot at ${Date.now()}`)
  /** invoke function with desired input */
  ;(async () => {
    const url =
      'https://interactive.aljazeera.com/aje/2018/live-results-pakistan-election-day-2018/index.html'
    const viewport = {
      width: 1366,
      height: 786,
      deviceScaleFactor: 2
    }
    const clipping = {
      x: 0,
      y: 0,
      width: 1366,
      height: 1200
    }
    const waitForSelector = '#svg-2018'
    const outputPath = `screenshots/screenshot_${Date.now()}.png`

    screenshot(url, viewport, clipping, waitForSelector, outputPath)
  })()
})

// generate json every ten minutes
const jsonJob = schedule.scheduleJob('*/10 * * * *', () => {
  console.log(`Generating json at ${Date.now()}`)
  ;(async () => {
    const host =
      'https://spreadsheets.google.com/feeds/list/1zOQUVU6GAWAkoMenXCs5nj6fnzzMkBIW-rQidinX8UE'
    const legacyEndpoint = host + '/3/public/values?alt=json'
    const currentEndpoint = host + '/1/public/values?alt=json'
    const candidateListEndpoint = host + '/2/public/values?alt=json'
    const widgetEndpoint = host + '/4/public/values?alt=json'

    await saveJson(legacyEndpoint, `fallback_json/legacy_${Date.now()}.json`)
    await saveJson(currentEndpoint, `fallback_json/current_${Date.now()}.json`)
    await saveJson(candidateListEndpoint, `fallback_json/candidateList_${Date.now()}.json`)
    await saveJson(widgetEndpoint, `fallback_json/widget_${Date.now()}.json`)
  })()
})
