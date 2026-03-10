# API Reference

Access StackScope data programmatically through our developer API.

## Overview

The StackScope API provides high-throughput access to real-time and historical data from the Stacks blockchain and DeFi ecosystem.

## Base URL

```
https://api.stackscope.io/v1
```

## Authentication

API requests require an API key passed in the header:

```bash
Authorization: Bearer YOUR_API_KEY
```

## Rate Limits

- Free tier: 100 requests per minute
- Pro tier: 1,000 requests per minute
- Enterprise: Custom limits

## Endpoints

### sBTC Metrics

Get current sBTC health metrics.

**Endpoint:** `GET /sbtc/metrics`

**Response:**
```json
{
  "total_supply": "1.2k BTC",
  "peg_health": 0.9998,
  "nodes": 84,
  "status": "stable",
  "timestamp": "2026-03-10T12:00:00Z"
}
```

**Fields:**
- `total_supply`: Total sBTC in circulation
- `peg_health`: Ratio of sBTC to BTC (target: 1.0)
- `nodes`: Active signer nodes
- `status`: Overall system status
- `timestamp`: Data timestamp (ISO 8601)

---

### Protocol List

Get all tracked DeFi protocols.

**Endpoint:** `GET /protocols`

**Response:**
```json
{
  "protocols": [
    {
      "id": "velar",
      "name": "Velar",
      "tvl": 12500000,
      "change_24h": 2.5,
      "category": "dex"
    },
    {
      "id": "alex",
      "name": "ALEX",
      "tvl": 8300000,
      "change_24h": -1.2,
      "category": "dex"
    }
  ]
}
```

---

### Protocol Details

Get detailed metrics for a specific protocol.

**Endpoint:** `GET /protocols/:protocol_id`

**Parameters:**
- `protocol_id`: Protocol identifier

**Response:**
```json
{
  "id": "velar",
  "name": "Velar",
  "tvl": 12500000,
  "tvl_change_24h": 2.5,
  "volume_24h": 450000,
  "active_users_24h": 1234,
  "yield_apy": 12.5,
  "category": "dex",
  "launched": "2024-06-15",
  "contracts": [
    "SP1Y5YSTAHZ88XYK1VPDH24GY0HPX5J4JECTMY4A1.velar-core"
  ]
}
```

---

### Network Stats

Get current network statistics.

**Endpoint:** `GET /network/stats`

**Response:**
```json
{
  "block_height": 150234,
  "avg_block_time": 600,
  "transactions_24h": 12543,
  "contracts_deployed_24h": 23,
  "active_addresses_24h": 5678,
  "mempool_size": 45
}
```

---

### Recent Blocks

Get recent blockchain blocks.

**Endpoint:** `GET /network/blocks`

**Query Parameters:**
- `limit`: Number of blocks (default: 10, max: 100)
- `offset`: Pagination offset

**Response:**
```json
{
  "blocks": [
    {
      "height": 150234,
      "hash": "0x7f3d8e...",
      "timestamp": "2026-03-10T12:00:00Z",
      "transactions": 156,
      "miner": "SP2H8PY27SEZ03MWRKS5XABZYQN17ETGQS3527SA5"
    }
  ]
}
```

---

### TVL History

Get historical TVL data for the ecosystem or a specific protocol.

**Endpoint:** `GET /tvl/history`

**Query Parameters:**
- `protocol_id`: Optional protocol filter
- `period`: Time period (1h, 24h, 7d, 30d, 90d, 1y, all)
- `resolution`: Data resolution (hourly, daily, weekly)

**Response:**
```json
{
  "data": [
    {
      "timestamp": "2026-03-10T00:00:00Z",
      "tvl": 125000000
    },
    {
      "timestamp": "2026-03-09T00:00:00Z",
      "tvl": 122500000
    }
  ]
}
```

---

## WebSocket API

Connect to real-time data streams.

### Connection

```javascript
const ws = new WebSocket('wss://api.stackscope.io/v1/ws');

ws.onopen = () => {
  // Subscribe to channels
  ws.send(JSON.stringify({
    type: 'subscribe',
    channels: ['blocks', 'sbtc.metrics']
  }));
};

ws.onmessage = (event) => {
  const data = JSON.parse(event.data);
  console.log(data);
};
```

### Available Channels

- `blocks`: New blocks
- `transactions`: New transactions
- `sbtc.metrics`: sBTC metrics updates
- `protocols.tvl`: Protocol TVL updates
- `network.stats`: Network statistics

### Message Format

```json
{
  "channel": "blocks",
  "data": {
    "height": 150235,
    "hash": "0x8a4c9f...",
    "timestamp": "2026-03-10T12:10:00Z",
    "transactions": 143
  }
}
```

---

## Error Handling

The API uses standard HTTP status codes:

- `200`: Success
- `400`: Bad request (invalid parameters)
- `401`: Unauthorized (invalid API key)
- `429`: Rate limit exceeded
- `500`: Internal server error

**Error Response:**
```json
{
  "error": {
    "code": "RATE_LIMIT_EXCEEDED",
    "message": "Rate limit exceeded. Retry after 60 seconds.",
    "retry_after": 60
  }
}
```

---

## Code Examples

### JavaScript (Fetch)

```javascript
const apiKey = 'YOUR_API_KEY';

fetch('https://api.stackscope.io/v1/sbtc/metrics', {
  headers: {
    'Authorization': `Bearer ${apiKey}`
  }
})
  .then(response => response.json())
  .then(data => console.log(data));
```

### Python (Requests)

```python
import requests

api_key = 'YOUR_API_KEY'
headers = {'Authorization': f'Bearer {api_key}'}

response = requests.get(
    'https://api.stackscope.io/v1/sbtc/metrics',
    headers=headers
)

data = response.json()
print(data)
```

### cURL

```bash
curl -H "Authorization: Bearer YOUR_API_KEY" \
  https://api.stackscope.io/v1/sbtc/metrics
```

---

## Getting an API Key

1. Visit your StackScope dashboard
2. Navigate to Settings > API Keys
3. Click "Generate New Key"
4. Store your key securely

**Note:** API keys are sensitive. Never commit them to version control or share them publicly.

---

## Support

For API support:
- Email: api@stackscope.io
- GitHub Issues: [github.com/stackscope/api-docs](https://github.com/stackscope/api-docs)
- Discord: [discord.gg/stackscope](https://discord.gg/stackscope)
