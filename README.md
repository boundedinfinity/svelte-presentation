## Diagram description


`[<group ID>[:<group text];]<box ID>[:<box text>][;[conn marker]<conn ID>[:conn text][conn marker], ...]`

Where:
- `group ID` is the optional group ID to which this box belongs
- `group text` is the optional text which provides a user visible for this group
- `box ID` is the mandatory ID for this box
- `box text` is the optional text which describes this box
- `connection ID` is the mandatory connection ID
- `connection text` is the optional user visiable connection text
- `connection marker`  is the mark to use for the connection.  The left markers denotes the beginning marker.  The right side denotes the ending marker.  Marker can be one of the following:
  - None: no marker is used
  - `.`: A dot is used
  - `>`: An arrow head (triangle) is used.  The arrow head will point in the directory of the connected box (or group)


## Examples

```
|               |
| (g1)[b1{b2}]  |
| (g1)[b2]      |
|               |               |
|               | (g2{b1})[b3]  |
|               | (g2)[b2{b2}]  |
---
b3:
    text: Box3

```




# Reference

- [Microsoft : Command-Line Syntax Key](https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2012-R2-and-2012/cc771080(v=ws.11)?redirectedfrom=MSDN)
- [Linux/Unix man page syntax conventions](https://stackoverflow.com/questions/23242493/linux-unix-man-page-syntax-conventions)|               |               |