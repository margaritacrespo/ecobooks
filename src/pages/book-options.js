export const grades = [
  {
    optgroup: {
      label: 'Primaria',
      options: [
        { value: 'p1', label: 'Primero de primaria' },
        { value: 'p2', label: 'Segundo de primaria' },
        { value: 'p3', label: 'Tercero de primaria' },
        { value: 'p4', label: 'Cuarto de primaria' },
        { value: 'p5', label: 'Quinto de primaria' },
        { value: 'p6', label: 'Sexto de primaria' }
      ]
    }
  },
  {
    optgroup: {
      label: 'Secundaria',
      options: [
        { value: 's1', label: 'Primero de secundaria' },
        { value: 's2', label: 'Segundo de secundaria' },
        { value: 's3', label: 'Tercero de secundaria' },
        { value: 's4', label: 'Cuarto de secundaria' }
      ]
    }
  },
  {
    optgroup: {
      label: 'Bachillerato',
      options: [
        { value: 'b1', label: 'Primero de bachillerato' },
        { value: 'b2', label: 'Segundo de bachillerato' }
      ]
    }
  }
]

export const subjects = [
  { value: 'mat', label: 'Matemáticas' },
  { value: 'cas', label: 'Lengua Castellana' },
  { value: 'cat', label: 'Lengua Catalana' },
  { value: 'soc', label: 'Ciencias Sociales' }
]

export const allGrades = grades.reduce((prev, curr) => {
  return [...prev, ...curr.optgroup.options]
}, [])
