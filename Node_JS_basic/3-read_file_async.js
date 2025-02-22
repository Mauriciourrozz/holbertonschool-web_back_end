const fs = require('fs/promises');

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    if (lines.length === 0) {
      console.log('Number of students: 0');
      return;
    }

    const header = lines[0].split(',');
    const rows = lines.slice(1);

    const fieldMap = rows.reduce((acc, line) => {
      const values = line.split(',');

      if (values.length !== header.length) return acc;

      const firstName = values[0];
      const field = values[values.length - 1];

      if (!acc[field]) {
        acc[field] = [];
      }

      acc[field].push(firstName);
      return acc;
    }, {});

    const totalStudents = Object.values(fieldMap).reduce((acc, list) => acc + list.length, 0);
    console.log(`Number of students: ${totalStudents}`);

    for (const [field, students] of Object.entries(fieldMap)) {
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    }
  } catch (error) {
    console.error('Cannot load the database');
    throw new Error(error.message);
  }
}

module.exports = countStudents;
;
