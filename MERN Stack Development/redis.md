https://redis.io/docs/latest/operate/oss_and_stack/install/archive/install-redis/install-redis-on-windows/

best key name <entityName>:<id> value

Examples:
- users:123
- products:456
- orders:789

set - used to set a key to a value
syntax: SET key value
get - used to get the value of a key
syntax: GET key
nx - set key only if it does not exist
syntax: SET key value NX
mset - used to set multiple keys at once
syntax: MSET key1 value1 key2 value2
mget - used to get the values of multiple keys
syntax: MGET key1 key2 key3

inc - used to increment a number stored at a key
syntax: INCR key
decr - used to decrement a number stored at a key
syntax: DECR key
incrby - used to increment a number stored at a key by a specific value
syntax: INCRBY key increment
decrby - used to decrement a number stored at a key by a specific value
syntax: DECRBY key decrement

expire - used to set a time-to-live (TTL) for a key
syntax: EXPIRE key seconds
ttl - used to get the time-to-live (TTL) for a key
syntax: TTL key
persist - used to remove the TTL from a key
syntax: PERSIST key
pexpire - used to set a time-to-live (TTL) for a key in milliseconds
syntax: PEXPIRE key milliseconds
pttl - used to get the time-to-live (TTL) for a key in milliseconds
syntax: P TTL key

LPUSH 
RPUSH
LPOP
RPOP
LLEN
LMOVE
LTRIM
BLPOP
LRANGE
DEL

User:*

Stack: L-Insert / L-Remove
Queue: L-Insert / R-Remove

SADD adds a new member to a set.
SREM removes the specified member from the set.
SISMEMBER tests a string for set membership.
SINTER returns the set of members that two or more sets have in common (i.e., the intersection).
SCARD returns the size (a.k.a. cardinality) of a set.

HSET: sets the value of one or more fields on a hash.
HGET: returns the value at a given field.
HMGET: returns the values at one or more given fields.
HINCRBY: increments the value at a given field by the integer provided.
HDEL: removes one or more fields from a hash.

https://redis.io/docs/latest/develop/data-types/
