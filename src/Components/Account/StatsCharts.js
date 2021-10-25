import { useEffect, useState } from 'react'
import styles from './StatsCharts.module.css'
import { VictoryPie, VictoryChart, VictoryBar } from 'victory'

export default function StatsCharts({ data }) {
  const [chartData, setChartData] = useState([])
  const [total, setTotal] = useState(0)

  useEffect(() => {
    if (data) {
      const chartData = data.map((item) => {
        return {
          x: item.title,
          y: Number(item.acessos),
        }
      })

      setTotal(
        data
          .map(({ acessos }) => Number(acessos))
          .reduce((previous, next) => previous + next)
      )
      setChartData(chartData)
    }
  }, [data])

  return (
    <section className={`animateLeft ${styles.chart}`}>
      <div className={`${styles.total} ${styles.chartItem}`}>
        <p>Acessos: {total}</p>
      </div>
      <div className={styles.chartItem}>
        <VictoryPie
          data={chartData}
          innerRadius={50}
          padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
          style={{
            data: {
              fillOpacity: 0.9,
              stroke: '#FFF',
              strokeWidth: 2,
            },
            labels: {
              fontSize: 14,
              fill: '#333',
            },
          }}
        />
      </div>
      <div className={styles.chartItem}>
        <VictoryChart>
          <VictoryBar data={chartData} alignment="start"></VictoryBar>
        </VictoryChart>
      </div>
    </section>
  )
}
