import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

import { TeacherUsageData } from "@/lib/data"

export function TeacherUsage() {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <LineChart
        width={500}
        height={200}
        data={TeacherUsageData}
        syncId="teacher"
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="ActiveTeachers"
          stroke="rgb(64 64 64)"
          fill="rgb(64 64 64)"
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
