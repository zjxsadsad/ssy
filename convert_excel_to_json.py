import pandas as pd
import json

def get_color_list():
    try:
        df = pd.read_excel('电子色号.xlsx')
        
        colors = []
        
        # Define the column mapping
        # 0: A series, 1: B series, etc.
        # Based on previous output:
        # A: 色号, HEX
        # B: 色号.1, HEX.1
        # C: 色号.2, HEX.2
        # ...
        
        groups = [
            {'id': '色号', 'hex': 'HEX'},
            {'id': '色号.1', 'hex': 'HEX.1'},
            {'id': '色号.2', 'hex': 'HEX.2'},
            {'id': '色号.3', 'hex': 'HEX.3'},
            {'id': '色号.4', 'hex': 'HEX.4'},
            {'id': '色号.5', 'hex': 'HEX.5'},
            {'id': '色号.6', 'hex': 'HEX.6'},
            {'id': '色号.7', 'hex': 'HEX.7'},
            {'id': '色号.8', 'hex': 'HEX.8'},
        ]
        
        seen_ids = set()

        for index, row in df.iterrows():
            for group in groups:
                color_id = row.get(group['id'])
                color_hex = row.get(group['hex'])
                
                # Check for NaN/None
                if pd.isna(color_id) or pd.isna(color_hex):
                    continue
                
                # Clean data
                color_id = str(color_id).strip()
                color_hex = str(color_hex).strip()
                
                if color_hex.startswith('#'):
                    pass
                else:
                    color_hex = '#' + color_hex
                
                if color_id and color_hex and color_id not in seen_ids:
                    colors.append({
                        "id": color_id,
                        "hex": color_hex
                    })
                    seen_ids.add(color_id)
        
        # Sort by ID to be nice (optional, but good for stability)
        # Simple sort might separate A1 and A10 properly if we are careful, 
        # but lexical sort is usually fine for this: A1, A10, A2... 
        # or we could just leave order as is.
        
        print("MARD_COLORS_START")
        print(json.dumps(colors, indent=2))
        print("MARD_COLORS_END")

    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    get_color_list()
