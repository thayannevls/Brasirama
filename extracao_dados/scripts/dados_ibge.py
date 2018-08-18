import pandas as pd

filepath = r"/Users/user/dev/BrasisDoBrasil/resources/PNADC_022018.txt"
filepath_dict = r"/Users/user/dev/BrasisDoBrasil/resources/dicionario_das_variaveis_PNAD_Continua_microdados_educacao_20180816.xls"

df = pd.read_excel(filepath_dict, header=1)

dic_var = {}
for i, rows in df[[df.columns[1], df.columns[2]]].dropna().iterrows():
    dic_var[rows[df.columns[2]]] = rows[df.columns[1]]

widths = list(map(int, list(dic_var.values())))
names = list(dic_var.keys())


pnad = pd.read_fwf(filepath, header=None, widths=widths, names=names)
print(pnad.iloc[1])
# pnad.to_csv(r"/Users/user/dev/BrasisDoBrasil/dados.csv", index=False, sep=";")