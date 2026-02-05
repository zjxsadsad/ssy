import pandas as pd
import json

try:
    df = pd.read_excel('电子色号.xlsx')
    # Print columns to help identify
    print(f"Columns: {df.columns.tolist()}")
    
    # Try to find relevant columns. Usually "ID" or "色号" and "Hex" or "RGB"
    # Convert entire dataframe to json for inspection if columns aren't obvious
    print(df.head(5).to_json(orient='records'))
    
    # Assuming we want all rows
    print("ALL_DATA_START")
    print(df.to_json(orient='records'))
    print("ALL_DATA_END")

except Exception as e:
    print(f"Error: {e}")
