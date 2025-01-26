const fs = require('fs/promises');

async function readFileContent(path) {
  try {
    return await fs.readFile(path, 'utf8');
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

function parseStudentsData(data) {
  const lines = data.split('\n').filter((line) => line.trim() !== '');

  if (lines.length === 0) {
    return { total: 0, fields: {} };
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

  return { total: totalStudents, fields: fieldMap };
}

async function countStudents(path) {
  try {
    const data = await readFileContent(path);
    const { total, fields } = parseStudentsData(data);

    console.log(`Number of students: ${total}`);
    for (const [field, students] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    }
  } catch (error) {
    console.error(error.message);
  }
}

module.exports = countStudents;
