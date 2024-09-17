import { DjangoProps } from "@/app/lib/declarations/interfaceComponents";
export default function SelectAnswer({ f }: DjangoProps): JSX.Element {
  const code = (() => {
    switch (f) {
      case "1":
        return `import mysql.connector
import pandas as pd
import numpy as np
connection = mysql.connector.connect(
		host='localhost',
		user='user',
		password='password',
		database='genetics_lab'
)
query = "SELECT species_name, last_seen, divergence_score FROM species"
df = pd.read_sql(query, connection)
mediana_geral = np.median(df['divergence_score'])
		`;
      case "2":
        return `import mysql.connector
import pandas as pd
connection = mysql.connector.connect(
		host='localhost',
		user='user',
		password='password',
		database='genetics_lab'
)
query = "SELECT species_name, last_seen, divergence_score FROM species"
df = pd.read_sql(query, connection)
media_geral = df['divergence_score'].mean()
		`;
      case "3":
        return `import mysql.connector
	import pandas as pd
	connection = mysql.connector.connect(
			host='localhost',
			user='user',
			password='password',
			database='genetics_lab'
	)
	query = "SELECT species_name, last_seen, divergence_score FROM species"
	df = pd.read_sql(query, connection)
	extinct_species = df[df['last_seen'] > 100]
	current_species = df[df['last_seen'] <= 100]
	media_extintos = extinct_species['divergence_score'].mean()
	media_atuais = current_species['divergence_score'].mean()
  `;
      case "4":
        return `import mysql.connector
import pandas as pd
connection = mysql.connector.connect(
		host='localhost',
		user='user',
		password='password',
		database='genetics_lab'
)
query = "SELECT species_name, last_seen, divergence_score FROM species"
df = pd.read_sql(query, connection)
extinct_species = df[df['last_seen'] > 100]
current_species = df[df['last_seen'] <= 100]
diferenca_media = extinct_species['divergence_score'].mean() - current_species['divergence_score'].mean()
  `;
      case "5":
        return `import mysql.connector
import pandas as pd
import numpy as np
connection = mysql.connector.connect(
		host='localhost',
		user='user',
		password='password',
		database='genetics_lab'
)
query = "SELECT species_name, last_seen, divergence_score FROM species"
df = pd.read_sql(query, connection)
extinct_species = df[df['last_seen'] > 100]
current_species = df[df['last_seen'] <= 100]
mediana_extintos = np.median(extinct_species['divergence_score'])
mediana_atuais = np.median(current_species['divergence_score'])
var_extintos = extinct_species['divergence_score'] - mediana_extintos
var_atuais = current_species['divergence_score'] - mediana_atuais
media_var_extintos = np.mean(var_extintos)
media_var_atuais = np.mean(var_atuais)
if media_var_atuais > media_var_extintos:
		tendencia = "Seleção direcional"
elif media_var_atuais < media_var_extintos:
		tendencia = "Seleção estabilizadora"
else:
		tendencia = "Seleção disruptiva"
    `;
      default:
        return ``;
    }
  })();
  return (
    <pre>
      <code>{code}</code>
    </pre>
  );
}
