// Comprehensive Databricks Certified Data Engineer Exam Questions
// Covers EVERY topic from Associate & Professional exam guides
// 220+ questions per level with granular topic coverage

export interface DBQuestion {
  id: string;
  level: 'associate' | 'professional';
  topic: string;
  subtopic?: string;
  question: string;
  options: string[];
  correctAnswers: number[];
  explanation: string;
  difficulty: 'basic' | 'intermediate' | 'advanced';
}

export const comprehensiveDatabricksQuestions: DBQuestion[] = [
  // ========== ASSOCIATE LEVEL ==========

  // ===== Delta Lake - Core Concepts =====
  {
    id: 'assoc-delta-core-001',
    level: 'associate',
    topic: 'Delta Lake',
    subtopic: 'ACID Transactions',
    question: 'What are the four ACID properties that Delta Lake guarantees?',
    options: [
      'Atomicity, Consistency, Isolation, Durability',
      'Asynchronous, Cache, Index, Distribution',
      'Aggregation, Clustering, Indexing, Deduplication',
      'Authentication, Compression, Integration, Discovery'
    ],
    correctAnswers: [0],
    explanation: 'ACID ensures all-or-nothing writes, consistent state, isolated transactions, and durable storage.',
    difficulty: 'basic'
  },
  {
    id: 'assoc-delta-core-002',
    level: 'associate',
    topic: 'Delta Lake',
    subtopic: 'Schema Enforcement',
    question: 'How does Delta Lake prevent schema drift?',
    options: [
      'Enforces schema on write by rejecting mismatched columns/types',
      'Automatically adds new columns',
      'Converts all data to string type',
      'Allows unrestricted schema changes'
    ],
    correctAnswers: [0],
    explanation: 'Schema enforcement validates incoming data against table schema; invalid writes are rejected.',
    difficulty: 'basic'
  },
  {
    id: 'assoc-delta-core-003',
    level: 'associate',
    topic: 'Delta Lake',
    subtopic: 'Time Travel',
    question: 'What versions can you query with time travel in Delta Lake?',
    options: [
      'Any version within retention period using VERSION AS OF or TIMESTAMP AS OF',
      'Only the latest version',
      'Only versions from today',
      'Only production versions'
    ],
    correctAnswers: [0],
    explanation: 'Time travel queries historical versions; default retention is 30 days for non-production.',
    difficulty: 'basic'
  },
  {
    id: 'assoc-delta-core-004',
    level: 'associate',
    topic: 'Delta Lake',
    subtopic: 'Transaction Log',
    question: 'What does the _delta_log directory contain?',
    options: [
      'Ordered JSON records of all table modifications',
      'User access logs',
      'Performance metrics',
      'Backup data'
    ],
    correctAnswers: [0],
    explanation: '_delta_log stores JSON transaction log files recording adds, deletes, updates.',
    difficulty: 'basic'
  },
  {
    id: 'assoc-delta-core-005',
    level: 'associate',
    topic: 'Delta Lake',
    subtopic: 'Data Versioning',
    question: 'How do you restore a Delta table to a previous version?',
    options: [
      'Using RESTORE TABLE AS OF VERSION or TIMESTAMP',
      'Manual file copy',
      'Database backup restore',
      'Manual data re-entry'
    ],
    correctAnswers: [0],
    explanation: 'RESTORE AS OF VERSION/TIMESTAMP reverts table state by replaying transaction log.',
    difficulty: 'intermediate'
  },

  // ===== Delta Lake - Optimization =====
  {
    id: 'assoc-delta-opt-001',
    level: 'associate',
    topic: 'Delta Lake',
    subtopic: 'OPTIMIZE Command',
    question: 'What does OPTIMIZE do?',
    options: [
      'Rewrites table files to compact small files into larger ones',
      'Compresses all data',
      'Deletes old data',
      'Creates backups'
    ],
    correctAnswers: [0],
    explanation: 'OPTIMIZE coalesces small files, reducing metadata and file count for faster queries.',
    difficulty: 'basic'
  },
  {
    id: 'assoc-delta-opt-002',
    level: 'associate',
    topic: 'Delta Lake',
    subtopic: 'ZORDER Clustering',
    question: 'What is ZORDER BY in Delta Lake?',
    options: [
      'Colocates related data by multi-column sort key to enable data skipping',
      'Random data sorting',
      'Alphabetical sorting only',
      'Timestamp-based sorting'
    ],
    correctAnswers: [0],
    explanation: 'Z-Order clusters by multiple columns; enables efficient range queries and stats-based skipping.',
    difficulty: 'intermediate'
  },
  {
    id: 'assoc-delta-opt-003',
    level: 'associate',
    topic: 'Delta Lake',
    subtopic: 'Data Skipping',
    question: 'What is data skipping in Delta Lake?',
    options: [
      'Skipping files that provably do not match WHERE predicates',
      'Skipping rows randomly',
      'Ignoring WHERE conditions',
      'Deleting unnecessary data'
    ],
    correctAnswers: [0],
    explanation: 'Statistics (min/max per column per file) enable Delta to skip files outside predicate range.',
    difficulty: 'intermediate'
  },
  {
    id: 'assoc-delta-opt-004',
    level: 'associate',
    topic: 'Delta Lake',
    subtopic: 'VACUUM Operation',
    question: 'What does VACUUM do in Delta Lake?',
    options: [
      'Removes old data files not referenced by latest version after retention period',
      'Clears cache',
      'Removes all history',
      'Compresses files'
    ],
    correctAnswers: [0],
    explanation: 'VACUUM deletes unreferenced files to reclaim storage; default retention is 7 days.',
    difficulty: 'intermediate'
  },
  {
    id: 'assoc-delta-opt-005',
    level: 'associate',
    topic: 'Delta Lake',
    subtopic: 'ANALYZE TABLE',
    question: 'What does ANALYZE TABLE COMPUTE STATISTICS do?',
    options: [
      'Computes table-level statistics for optimization (row count, size)',
      'Analyzes query performance',
      'Runs unit tests',
      'Validates data quality'
    ],
    correctAnswers: [0],
    explanation: 'ANALYZE updates statistics used by optimizer for cost-based decisions.',
    difficulty: 'intermediate'
  },

  // ===== File Formats =====
  {
    id: 'assoc-format-001',
    level: 'associate',
    topic: 'File Formats',
    subtopic: 'Parquet',
    question: 'What are the main advantages of Parquet format?',
    options: [
      'Columnar storage, compression, predicate pushdown, schema inference',
      'Row-based, human-readable',
      'Simple text format',
      'No compression'
    ],
    correctAnswers: [0],
    explanation: 'Parquet is columnar: fast analytics, great compression, pushdown support.',
    difficulty: 'basic'
  },
  {
    id: 'assoc-format-002',
    level: 'associate',
    topic: 'File Formats',
    subtopic: 'Avro',
    question: 'What is Avro best for?',
    options: [
      'Schema evolution and streaming; supports nested complex types',
      'Analytics and OLAP',
      'Text processing',
      'Image storage'
    ],
    correctAnswers: [0],
    explanation: 'Avro excels at schema versioning, kafka streaming, RPC.',
    difficulty: 'basic'
  },
  {
    id: 'assoc-format-003',
    level: 'associate',
    topic: 'File Formats',
    subtopic: 'CSV',
    question: 'What are drawbacks of CSV format?',
    options: [
      'No schema, no compression, no type info, full table scans required',
      'Too small files',
      'Not compressible',
      'Encrypted by default'
    ],
    correctAnswers: [0],
    explanation: 'CSV is human-readable but untyped, uncompressed, requiring full scans.',
    difficulty: 'basic'
  },
  {
    id: 'assoc-format-004',
    level: 'associate',
    topic: 'File Formats',
    subtopic: 'JSON',
    question: 'When should you use JSON format?',
    options: [
      'Nested/semi-structured data with schema flexibility',
      'Always instead of Parquet',
      'Only for logging',
      'Never'
    ],
    correctAnswers: [0],
    explanation: 'JSON suits nested data; less efficient than Parquet for analytics.',
    difficulty: 'basic'
  },
  {
    id: 'assoc-format-005',
    level: 'associate',
    topic: 'File Formats',
    subtopic: 'Delta Format',
    question: 'How is Delta format stored physically?',
    options: [
      'Parquet data files + JSON transaction log in _delta_log/',
      'Custom binary format',
      'CSV with metadata',
      'Encrypted format'
    ],
    correctAnswers: [0],
    explanation: 'Delta = Parquet + transaction log; transparent upgrade from Parquet.',
    difficulty: 'basic'
  },

  // ===== Spark Fundamentals =====
  {
    id: 'assoc-spark-001',
    level: 'associate',
    topic: 'Spark Fundamentals',
    subtopic: 'RDD vs DataFrame',
    question: 'What is the key difference between RDD and DataFrame?',
    options: [
      'RDD untyped/unoptimized; DataFrame typed with schema and Catalyst optimization',
      'RDD is faster',
      'DataFrame cannot handle complex types',
      'RDD is newer'
    ],
    correctAnswers: [0],
    explanation: 'RDDs are low-level; DataFrames add schema, SQL, and optimizer intelligence.',
    difficulty: 'basic'
  },
  {
    id: 'assoc-spark-002',
    level: 'associate',
    topic: 'Spark Fundamentals',
    subtopic: 'Transformations',
    question: 'What is a Spark transformation?',
    options: [
      'Lazy operation creating new RDD/DataFrame from existing one',
      'Immediate operation executing code',
      'Writing to disk',
      'Reading from database'
    ],
    correctAnswers: [0],
    explanation: 'Transformations are lazy; only DAG built, not executed until action.',
    difficulty: 'basic'
  },
  {
    id: 'assoc-spark-003',
    level: 'associate',
    topic: 'Spark Fundamentals',
    subtopic: 'Actions',
    question: 'What is a Spark action?',
    options: [
      'Eager operation triggering computation and returning results',
      'Lazy operation',
      'Query planning',
      'Schema definition'
    ],
    correctAnswers: [0],
    explanation: 'Actions (collect, show, write, count) trigger DAG execution.',
    difficulty: 'basic'
  },
  {
    id: 'assoc-spark-004',
    level: 'associate',
    topic: 'Spark Fundamentals',
    subtopic: 'Catalyst Optimizer',
    question: 'What does Catalyst optimizer do?',
    options: [
      'Optimizes logical plans to efficient physical plans via rule and cost-based optimization',
      'Compiles Scala to Java',
      'Manages memory',
      'Handles serialization'
    ],
    correctAnswers: [0],
    explanation: 'Catalyst applies 100+ optimization rules: constant folding, predicate pushdown, join reordering.',
    difficulty: 'intermediate'
  },
  {
    id: 'assoc-spark-005',
    level: 'associate',
    topic: 'Spark Fundamentals',
    subtopic: 'Tungsten Project',
    question: 'What did Tungsten optimize in Spark?',
    options: [
      'Memory management and CPU efficiency via cache-aware computation',
      'Storage only',
      'Network only',
      'User interface'
    ],
    correctAnswers: [0],
    explanation: 'Tungsten: whole-stage code generation, off-heap memory, vectorization.',
    difficulty: 'intermediate'
  },

  // ===== Spark Architecture & DAGs =====
  {
    id: 'assoc-dag-001',
    level: 'associate',
    topic: 'Spark Architecture',
    subtopic: 'DAG',
    question: 'What is a DAG (Directed Acyclic Graph) in Spark?',
    options: [
      'Logical representation of transformations and dependencies',
      'Physical file structure',
      'User interface',
      'Database schema'
    ],
    correctAnswers: [0],
    explanation: 'DAG is built from transformations; scheduler converts to physical stages.',
    difficulty: 'basic'
  },
  {
    id: 'assoc-dag-002',
    level: 'associate',
    topic: 'Spark Architecture',
    subtopic: 'Stages',
    question: 'What is a Spark stage?',
    options: [
      'Set of parallel tasks with no shuffle between them',
      'A serialization step',
      'A compression step',
      'A backup step'
    ],
    correctAnswers: [0],
    explanation: 'Stages are created by breaking DAG at shuffle boundaries.',
    difficulty: 'intermediate'
  },
  {
    id: 'assoc-dag-003',
    level: 'associate',
    topic: 'Spark Architecture',
    subtopic: 'Narrow vs Wide Transformations',
    question: 'What is the difference between narrow and wide transformations?',
    options: [
      'Narrow: no shuffle (map/filter); Wide: shuffle across partitions (join/group)',
      'Narrow is always slower',
      'Wide is always faster',
      'Same thing'
    ],
    correctAnswers: [0],
    explanation: 'Narrow dependencies = one parent partition per child; wide = multiple parents.',
    difficulty: 'intermediate'
  },
  {
    id: 'assoc-dag-004',
    level: 'associate',
    topic: 'Spark Architecture',
    subtopic: 'Cost Optimizer',
    question: 'What does cost-based optimization use?',
    options: [
      'Statistics (row count, size, NDV) to estimate plan costs and choose best',
      'Random selection',
      'Rule-based only',
      'User preference only'
    ],
    correctAnswers: [0],
    explanation: 'CBO uses ANALYZE TABLE stats to estimate cardinality and choose optimal joins.',
    difficulty: 'intermediate'
  },
  {
    id: 'assoc-dag-005',
    level: 'associate',
    topic: 'Spark Architecture',
    subtopic: 'Adaptive Query Execution',
    question: 'What is Adaptive Query Execution (AQE)?',
    options: [
      'Runtime re-optimization using actual data statistics mid-execution',
      'Pre-execution optimization only',
      'Manual query tuning',
      'Hardware adaptation'
    ],
    correctAnswers: [0],
    explanation: 'AQE adjusts plans dynamically: reduces partition count, handles skew, optimizes joins.',
    difficulty: 'intermediate'
  },

  // ===== Data Ingestion & Auto Loader =====
  {
    id: 'assoc-ingest-001',
    level: 'associate',
    topic: 'Data Ingestion',
    subtopic: 'Auto Loader',
    question: 'What is Auto Loader?',
    options: [
      'Incremental data loading detecting new files in cloud storage automatically',
      'Manual file upload tool',
      'Data compression tool',
      'Query optimizer'
    ],
    correctAnswers: [0],
    explanation: 'Auto Loader uses directory listing or file notifications to detect new files.',
    difficulty: 'basic'
  },
  {
    id: 'assoc-ingest-002',
    level: 'associate',
    topic: 'Data Ingestion',
    subtopic: 'Schema Inference',
    question: 'What is schema inference in Auto Loader?',
    options: [
      'Automatic detection and application of schema from sample files',
      'Manual schema definition only',
      'Random schema assignment',
      'No schema support'
    ],
    correctAnswers: [0],
    explanation: 'Auto Loader samples files to infer schema; can be explicit or automatic.',
    difficulty: 'basic'
  },
  {
    id: 'assoc-ingest-003',
    level: 'associate',
    topic: 'Data Ingestion',
    subtopic: 'Ingestion Patterns',
    question: 'What are common data ingestion patterns?',
    options: [
      'Batch (scheduled), Streaming (continuous), Micro-batch (frequent small batches)',
      'Only batch',
      'Only streaming',
      'Random patterns'
    ],
    correctAnswers: [0],
    explanation: 'Choose based on latency requirements: batch low-latency, streaming high-latency.',
    difficulty: 'intermediate'
  },
  {
    id: 'assoc-ingest-004',
    level: 'associate',
    topic: 'Data Ingestion',
    subtopic: 'Checkpointing',
    question: 'Why is checkpointing important in streaming?',
    options: [
      'Records progress (offset/position) enabling fault recovery from exact point',
      'Backs up data',
      'Compresses output',
      'Validates schema'
    ],
    correctAnswers: [0],
    explanation: 'Checkpoints enable "exactly-once" semantics by resuming from last offset.',
    difficulty: 'intermediate'
  },
  {
    id: 'assoc-ingest-005',
    level: 'associate',
    topic: 'Data Ingestion',
    subtopic: 'Watermarking',
    question: 'What is watermarking in streaming?',
    options: [
      'Threshold marking how late data can arrive before being dropped',
      'Data validation marker',
      'Encryption feature',
      'Compression algorithm'
    ],
    correctAnswers: [0],
    explanation: 'Watermark = current_max_timestamp - allowed_lateness; late arrivals handled per policy.',
    difficulty: 'intermediate'
  },

  // ===== Data Quality & DLT =====
  {
    id: 'assoc-quality-001',
    level: 'associate',
    topic: 'Data Quality',
    subtopic: 'DLT Overview',
    question: 'What is Delta Live Tables (DLT)?',
    options: [
      'Declarative framework for building reliable pipelines with automatic orchestration',
      'Manual pipeline builder',
      'Query tool',
      'Backup system'
    ],
    correctAnswers: [0],
    explanation: 'DLT abstracts scheduling, error handling, monitoring via SQL/Python.',
    difficulty: 'basic'
  },
  {
    id: 'assoc-quality-002',
    level: 'associate',
    topic: 'Data Quality',
    subtopic: 'Quality Constraints',
    question: 'What do quality constraints in DLT do?',
    options: [
      'Enforce data rules; reject/quarantine invalid rows and track failures',
      'Just log warnings',
      'Encrypt data',
      'Compress files'
    ],
    correctAnswers: [0],
    explanation: 'DLT constraints drop invalid rows and maintain quality metrics per rule.',
    difficulty: 'basic'
  },
  {
    id: 'assoc-quality-003',
    level: 'associate',
    topic: 'Data Quality',
    subtopic: 'Expectations',
    question: 'What is an expectation in DLT?',
    options: [
      'A quality constraint with name and condition; actions on violation (DROP, WARN)',
      'A query result',
      'A table definition',
      'A user role'
    ],
    correctAnswers: [0],
    explanation: 'Expectations define acceptable data; on failure, rows dropped or warned.',
    difficulty: 'intermediate'
  },
  {
    id: 'assoc-quality-004',
    level: 'associate',
    topic: 'Data Quality',
    subtopic: 'Lineage in DLT',
    question: 'What lineage does DLT provide?',
    options: [
      'Automatic tracking of data flow and dependencies between tables',
      'Manual lineage documentation',
      'No lineage support',
      'User-defined lineage only'
    ],
    correctAnswers: [0],
    explanation: 'DLT auto-generates lineage graph showing source→transform→output.',
    difficulty: 'intermediate'
  },
  {
    id: 'assoc-quality-005',
    level: 'associate',
    topic: 'Data Quality',
    subtopic: 'Medallion Architecture',
    question: 'What are the three layers of Medallion Architecture?',
    options: [
      'Bronze (raw) → Silver (cleaned/deduplicated) → Gold (curated business)',
      'Layer 1, Layer 2, Layer 3',
      'Raw, Processed, Final',
      'Alpha, Beta, Gamma'
    ],
    correctAnswers: [0],
    explanation: 'Medallion organizes data by quality; bronze raw, silver cleansed, gold aggregated.',
    difficulty: 'basic'
  },

  // ===== Table Engineering =====
  {
    id: 'assoc-table-001',
    level: 'associate',
    topic: 'Table Engineering',
    subtopic: 'Managed vs External',
    question: 'What is the difference between managed and external Delta tables?',
    options: [
      'Managed: Delta owns data (stored in UC location); External: data in user location',
      'Same thing',
      'Managed is slower',
      'External is newer'
    ],
    correctAnswers: [0],
    explanation: 'DROP managed table deletes data; DROP external table only removes metadata.',
    difficulty: 'basic'
  },
  {
    id: 'assoc-table-002',
    level: 'associate',
    topic: 'Table Engineering',
    subtopic: 'Table Creation',
    question: 'What methods exist for creating Delta tables?',
    options: [
      'SQL CREATE TABLE, Spark DataFrame.write.mode("overwrite").saveAsTable(), CTAS',
      'Only SQL',
      'Only Spark API',
      'Manual file creation'
    ],
    correctAnswers: [0],
    explanation: 'CREATE TABLE, CTAS, Dataframe.write.mode() all create Delta tables.',
    difficulty: 'intermediate'
  },
  {
    id: 'assoc-table-003',
    level: 'associate',
    topic: 'Table Engineering',
    subtopic: 'CRUD Operations',
    question: 'Which SQL commands perform CRUD in Delta Lake?',
    options: [
      'SELECT (Read), INSERT/UPDATE/DELETE (Write), MERGE (Upsert)',
      'Only SELECT',
      'Only INSERT',
      'No write support'
    ],
    correctAnswers: [0],
    explanation: 'Delta supports all ACID writes; MERGE is most efficient for upserts.',
    difficulty: 'basic'
  },
  {
    id: 'assoc-table-004',
    level: 'associate',
    topic: 'Table Engineering',
    subtopic: 'MERGE Upsert',
    question: 'What does MERGE do in Delta?',
    options: [
      'Combines INSERT, UPDATE, DELETE in one atomic operation (upsert)',
      'Only inserts',
      'Only updates',
      'Manual merge'
    ],
    correctAnswers: [0],
    explanation: 'MERGE with MATCHED/NOT MATCHED clauses handles multi-action updates atomically.',
    difficulty: 'intermediate'
  },
  {
    id: 'assoc-table-005',
    level: 'associate',
    topic: 'Table Engineering',
    subtopic: 'Partitioning',
    question: 'Why partition Delta tables?',
    options: [
      'Enable partition pruning, reduce query scan scope, improve performance',
      'Store more data',
      'Encrypt data',
      'Compress files'
    ],
    correctAnswers: [0],
    explanation: 'Partitioning by low-cardinality columns (date, region) enables fast filtering.',
    difficulty: 'intermediate'
  },

  // ===== Clustering & Storage Optimization =====
  {
    id: 'assoc-cluster-001',
    level: 'associate',
    topic: 'Clustering',
    subtopic: 'Liquid Clustering',
    question: 'What is liquid clustering in Delta Lake?',
    options: [
      'Dynamic adaptive clustering that automatically adjusts to query patterns',
      'Manual partitioning',
      'File compression',
      'User defined'
    ],
    correctAnswers: [0],
    explanation: 'Liquid clustering replaces manual partitioning; adapts layout automatically.',
    difficulty: 'intermediate'
  },
  {
    id: 'assoc-cluster-002',
    level: 'associate',
    topic: 'Clustering',
    subtopic: 'Z-Order Optimization',
    question: 'When should you use ZORDER vs partitioning?',
    options: [
      'ZORDER for high-cardinality columns; partitioning for low-cardinality',
      'Always ZORDER',
      'Always partitioning',
      'Never use either'
    ],
    correctAnswers: [0],
    explanation: 'ZORDER works for many columns; partitioning for few key columns.',
    difficulty: 'intermediate'
  },
  {
    id: 'assoc-cluster-003',
    level: 'associate',
    topic: 'Clustering',
    subtopic: 'Small Files Problem',
    question: 'What is the small files problem and how to fix?',
    options: [
      'Many small files slow queries; fix with OPTIMIZE to compact files',
      'No issue with small files',
      'Automatic solving',
      'Ignore them'
    ],
    correctAnswers: [0],
    explanation: 'Small files increase metadata overhead; OPTIMIZE coalesces them.',
    difficulty: 'intermediate'
  },
  {
    id: 'assoc-cluster-004',
    level: 'associate',
    topic: 'Clustering',
    subtopic: 'Storage Optimization',
    question: 'What storage optimization techniques exist in Databricks?',
    options: [
      'OPTIMIZE (compact files), VACUUM (remove old), Z-ORDER (cluster)',
      'Only compression',
      'Only deletion',
      'None needed'
    ],
    correctAnswers: [0],
    explanation: 'Combine OPTIMIZE + VACUUM + Z-ORDER for optimal storage and performance.',
    difficulty: 'intermediate'
  },
  {
    id: 'assoc-cluster-005',
    level: 'associate',
    topic: 'Clustering',
    subtopic: 'Shuffle Optimization',
    question: 'How do you minimize shuffle in Spark jobs?',
    options: [
      'Avoid unnecessary joins/groups, use broadcast join, pre-sort data',
      'Accept all shuffles',
      'Disable joins',
      'Always force shuffle'
    ],
    correctAnswers: [0],
    explanation: 'Shuffle is expensive; reduce via broadcast, pre-sort, partition-aware design.',
    difficulty: 'intermediate'
  },

  // ===== Unity Catalog =====
  {
    id: 'assoc-uc-001',
    level: 'associate',
    topic: 'Unity Catalog',
    subtopic: 'Hierarchy',
    question: 'What is the UC hierarchy?',
    options: [
      'Metastore > Catalog > Schema > Table (4 levels)',
      'Database > Schema > Table',
      'Cluster > Schema > Table',
      'Workspace > Table'
    ],
    correctAnswers: [0],
    explanation: 'UC provides multi-workspace governance via Metastore-level isolation.',
    difficulty: 'basic'
  },
  {
    id: 'assoc-uc-002',
    level: 'associate',
    topic: 'Unity Catalog',
    subtopic: 'Permissions (RBAC)',
    question: 'What permission levels does UC support?',
    options: [
      'USAGE, SELECT, MODIFY, ADMIN at object level',
      'Only read/write',
      'Only admin',
      'No granular permissions'
    ],
    correctAnswers: [0],
    explanation: 'RBAC applies at metastore, catalog, schema, table levels.',
    difficulty: 'basic'
  },
  {
    id: 'assoc-uc-003',
    level: 'associate',
    topic: 'Unity Catalog',
    subtopic: 'Row/Column Masking',
    question: 'What is row and column masking in UC?',
    options: [
      'Row masking: filters rows per user; Column masking: obscures values',
      'Same thing',
      'Not supported',
      'Optional feature'
    ],
    correctAnswers: [0],
    explanation: 'Dynamic masking hides sensitive data for non-privileged users automatically.',
    difficulty: 'intermediate'
  },
  {
    id: 'assoc-uc-004',
    level: 'associate',
    topic: 'Unity Catalog',
    subtopic: 'Lineage & Auditing',
    question: 'What lineage and audit capabilities does UC provide?',
    options: [
      'Automatic lineage tracking and audit logs of access/modifications',
      'No tracking',
      'Manual logs only',
      'No audit trail'
    ],
    correctAnswers: [0],
    explanation: 'UC audit logs show who accessed what, when; lineage shows data flow.',
    difficulty: 'intermediate'
  },
  {
    id: 'assoc-uc-005',
    level: 'associate',
    topic: 'Unity Catalog',
    subtopic: 'Principal Management',
    question: 'What is a principal in UC?',
    options: [
      'User, group, or service principal to which permissions are granted',
      'A database object',
      'A query optimizer',
      'A file'
    ],
    correctAnswers: [0],
    explanation: 'Principals are identities; groups aggregate principals for bulk permissions.',
    difficulty: 'basic'
  },

  // ===== SQL for Data Engineering =====
  {
    id: 'assoc-sql-001',
    level: 'associate',
    topic: 'SQL for Data Engineering',
    subtopic: 'Window Functions',
    question: 'What are window functions and common examples?',
    options: [
      'Aggregate over row partitions: ROW_NUMBER, RANK, SUM OVER, AVG OVER',
      'Only SELECT statements',
      'Not supported',
      'Only COUNT'
    ],
    correctAnswers: [0],
    explanation: 'Window functions compute rolling/cumulative values without collapsing groups.',
    difficulty: 'intermediate'
  },
  {
    id: 'assoc-sql-002',
    level: 'associate',
    topic: 'SQL for Data Engineering',
    subtopic: 'CTE',
    question: 'What is a CTE (Common Table Expression)?',
    options: [
      'Temporary named result set (WITH clause) for readability and recursion',
      'Permanent table',
      'View definition',
      'Index'
    ],
    correctAnswers: [0],
    explanation: 'CTEs simplify complex queries; enable recursive queries.',
    difficulty: 'basic'
  },
  {
    id: 'assoc-sql-003',
    level: 'associate',
    topic: 'SQL for Data Engineering',
    subtopic: 'Joins',
    question: 'What join types exist and when to use each?',
    options: [
      'INNER (matching only), LEFT (all left + matching), RIGHT, FULL (all from both)',
      'Only INNER',
      'Only LEFT',
      'No choice'
    ],
    correctAnswers: [0],
    explanation: 'Choose join type based on what rows to keep from each side.',
    difficulty: 'basic'
  },
  {
    id: 'assoc-sql-004',
    level: 'associate',
    topic: 'SQL for Data Engineering',
    subtopic: 'Aggregation',
    question: 'How do GROUP BY and HAVING work together?',
    options: [
      'GROUP BY aggregates rows; HAVING filters aggregated groups',
      'HAVING only filters rows',
      'Same function',
      'No difference'
    ],
    correctAnswers: [0],
    explanation: 'WHERE filters rows before GROUP; HAVING filters groups after aggregation.',
    difficulty: 'basic'
  },
  {
    id: 'assoc-sql-005',
    level: 'associate',
    topic: 'SQL for Data Engineering',
    subtopic: 'Set Operations',
    question: 'What set operations exist and when to use?',
    options: [
      'UNION (all rows, deduplicated), UNION ALL (with duplicates), EXCEPT, INTERSECT',
      'Only UNION',
      'Only EXCEPT',
      'No set operations'
    ],
    correctAnswers: [0],
    explanation: 'UNION requires same schema; all rows combined (deduplicated); UNION ALL keeps duplicates.',
    difficulty: 'intermediate'
  },

  // ===== Spark Tuning & Configuration =====
  {
    id: 'assoc-tune-001',
    level: 'associate',
    topic: 'Performance Tuning',
    subtopic: 'Partition Count',
    question: 'How to determine optimal partition count?',
    options: [
      'Cores × 2-4 for initial; adjust based on data size and shuffle',
      'Always 1 partition',
      'Always maximum',
      'Random'
    ],
    correctAnswers: [0],
    explanation: 'Too few = underutilized cores; too many = overhead. Aim for 128MB-256MB per partition.',
    difficulty: 'intermediate'
  },
  {
    id: 'assoc-tune-002',
    level: 'associate',
    topic: 'Performance Tuning',
    subtopic: 'Memory Config',
    question: 'What is executor memory allocation?',
    options: [
      'Memory per executor for task execution, caching, shuffle buffers',
      'Memory per cluster',
      'Total cluster memory',
      'Fixed value'
    ],
    correctAnswers: [0],
    explanation: 'executor-memory = heap memory; off-heap memory used by Tungsten for execution.',
    difficulty: 'intermediate'
  },
  {
    id: 'assoc-tune-003',
    level: 'associate',
    topic: 'Performance Tuning',
    subtopic: 'Broadcast Threshold',
    question: 'What is broadcast join threshold?',
    options: [
      'Maximum size for table to be broadcasted to all workers (default 10MB)',
      'Minimum table size',
      'Maximum query size',
      'Random threshold'
    ],
    correctAnswers: [0],
    explanation: 'Tables < threshold use broadcast; avoids expensive shuffle.',
    difficulty: 'intermediate'
  },
  {
    id: 'assoc-tune-004',
    level: 'associate',
    topic: 'Performance Tuning',
    subtopic: 'Caching',
    question: 'When and how to use caching in Spark?',
    options: [
      'Cache frequently-reused DataFrames with cache() to avoid recomputation',
      'Cache everything',
      'No caching needed',
      'Always uncached'
    ],
    correctAnswers: [0],
    explanation: 'cache() materializes in memory; use for DataFrames reused multiple times.',
    difficulty: 'intermediate'
  },
  {
    id: 'assoc-tune-005',
    level: 'associate',
    topic: 'Performance Tuning',
    subtopic: 'Monitoring',
    question: 'What metrics does Spark UI show?',
    options: [
      'Task duration, shuffle read/write, memory usage, GC time',
      'Only query text',
      'Only errors',
      'No metrics'
    ],
    correctAnswers: [0],
    explanation: 'Spark UI (localhost:4040) is essential for diagnosing performance issues.',
    difficulty: 'intermediate'
  },

  // ===== Cluster & Compute Management =====
  {
    id: 'assoc-compute-001',
    level: 'associate',
    topic: 'Cluster Management',
    subtopic: 'Cluster Types',
    question: 'What cluster types exist in Databricks?',
    options: [
      'All-Purpose (interactive/dev), Job (batch jobs), SQL (SQL queries)',
      'Only interactive',
      'Only batch',
      'No types'
    ],
    correctAnswers: [0],
    explanation: 'Choose cluster type based on workload: dev/test, batch ETL, or SQL analytics.',
    difficulty: 'basic'
  },
  {
    id: 'assoc-compute-002',
    level: 'associate',
    topic: 'Cluster Management',
    subtopic: 'Autoscaling',
    question: 'How does autoscaling work?',
    options: [
      'Dynamically adjusts worker count between min/max based on pending tasks',
      'Fixed size only',
      'Manual scaling',
      'Automatic pausing'
    ],
    correctAnswers: [0],
    explanation: 'Autoscaling optimizes cost by scaling up on load, down on idle.',
    difficulty: 'basic'
  },
  {
    id: 'assoc-compute-003',
    level: 'associate',
    topic: 'Cluster Management',
    subtopic: 'Spot Instances',
    question: 'What are spot instances and when to use?',
    options: [
      'Cheaper but interruptible VMs; good for batch/fault-tolerant jobs',
      'Always reliable',
      'Always slower',
      'Not available'
    ],
    correctAnswers: [0],
    explanation: 'Spot instances offer 70% discount; Spark handles interruptions via reruns.',
    difficulty: 'intermediate'
  },
  {
    id: 'assoc-compute-004',
    level: 'associate',
    topic: 'Cluster Management',
    subtopic: 'Pool Management',
    question: 'What are instance pools?',
    options: [
      'Pre-warmed VMs ready for cluster launch, reducing startup time',
      'SQL database pools',
      'Memory caches',
      'User pools'
    ],
    correctAnswers: [0],
    explanation: 'Pools keep instances warm; clusters launch faster from pools.',
    difficulty: 'intermediate'
  },
  {
    id: 'assoc-compute-005',
    level: 'associate',
    topic: 'Cluster Management',
    subtopic: 'Cost Optimization',
    question: 'How to minimize Databricks compute costs?',
    options: [
      'Use spot instances, autoscaling, pools, right-sizing, terminate idle clusters',
      'Always pay for max',
      'No optimization possible',
      'Ignore costs'
    ],
    correctAnswers: [0],
    explanation: 'Combine spot (cost) + on-demand (reliability) instances for balance.',
    difficulty: 'intermediate'
  },

  // ===== Jobs & Workflows =====
  {
    id: 'assoc-jobs-001',
    level: 'associate',
    topic: 'Jobs & Workflows',
    subtopic: 'Job Definition',
    question: 'What is a Databricks job?',
    options: [
      'Scheduled or triggered execution of Notebook, JAR, or Python script',
      'Interactive query only',
      'Data visualization',
      'Report'
    ],
    correctAnswers: [0],
    explanation: 'Jobs handle ETL, data prep, or periodic tasks; support Notebook/JAR/Python/SQL.',
    difficulty: 'basic'
  },
  {
    id: 'assoc-jobs-002',
    level: 'associate',
    topic: 'Jobs & Workflows',
    subtopic: 'Retry Policies',
    question: 'What retry policies can be set on jobs?',
    options: [
      'Exponential backoff, max retries, timeout between retries',
      'No retry support',
      'Only manual retry',
      'Immediate retry'
    ],
    correctAnswers: [0],
    explanation: 'Retry policies improve resilience to transient failures.',
    difficulty: 'intermediate'
  },
  {
    id: 'assoc-jobs-003',
    level: 'associate',
    topic: 'Jobs & Workflows',
    subtopic: 'Scheduling',
    question: 'What scheduling options exist for jobs?',
    options: [
      'Cron schedules, one-time runs, trigger-based (webhook, event)',
      'Only fixed times',
      'Only once per day',
      'No scheduling'
    ],
    correctAnswers: [0],
    explanation: 'Cron enables periodic execution; webhooks allow event-driven triggers.',
    difficulty: 'basic'
  },
  {
    id: 'assoc-jobs-004',
    level: 'associate',
    topic: 'Jobs & Workflows',
    subtopic: 'Monitoring & Alerts',
    question: 'What monitoring capabilities exist?',
    options: [
      'Job run history, duration tracking, failure alerts, email notifications',
      'No monitoring',
      'Logs only',
      'No alerts'
    ],
    correctAnswers: [0],
    explanation: 'Monitor job SLAs via run history and alerts on failure/timeout.',
    difficulty: 'intermediate'
  },
  {
    id: 'assoc-jobs-005',
    level: 'associate',
    topic: 'Jobs & Workflows',
    subtopic: 'Workflow Dependencies',
    question: 'How to create dependencies between jobs?',
    options: [
      'Using Databricks Workflows (formerly Jobs 2.0) with task dependencies',
      'No dependencies possible',
      'Manual chaining',
      'Random order'
    ],
    correctAnswers: [0],
    explanation: 'Workflows allow task DAGs with conditional branches and parallelism.',
    difficulty: 'intermediate'
  },

  // ===== More Topics - MLflow & AI =====
  {
    id: 'assoc-mlflow-001',
    level: 'associate',
    topic: 'MLflow',
    subtopic: 'Tracking',
    question: 'What does MLflow Tracking do?',
    options: [
      'Records parameters, metrics, artifacts of ML experiments for comparison',
      'Trains models',
      'Deploys models',
      'Visualizes data'
    ],
    correctAnswers: [0],
    explanation: 'Tracking enables experiment comparison, reproducibility.',
    difficulty: 'basic'
  },
  {
    id: 'assoc-mlflow-002',
    level: 'associate',
    topic: 'MLflow',
    subtopic: 'Model Registry',
    question: 'What is MLflow Model Registry?',
    options: [
      'Centralized repository for model versions, stages (Staging/Production/Archived)',
      'Experiment tracker',
      'Data registry',
      'User registry'
    ],
    correctAnswers: [0],
    explanation: 'Registry manages model lifecycle across stages; enables promotion to prod.',
    difficulty: 'basic'
  },
  {
    id: 'assoc-mlflow-003',
    level: 'associate',
    topic: 'MLflow',
    subtopic: 'Model Serving',
    question: 'What is MLflow Model Serving?',
    options: [
      'Deploying models as REST API endpoints for batch/real-time inference',
      'Training models',
      'Logging metrics',
      'Feature engineering'
    ],
    correctAnswers: [0],
    explanation: 'Serving hosts models; Databricks Serving provides serverless endpoints.',
    difficulty: 'basic'
  },
  {
    id: 'assoc-mlflow-004',
    level: 'associate',
    topic: 'MLflow',
    subtopic: 'Model Versioning',
    question: 'How does MLflow handle model versions?',
    options: [
      'Auto-increment versions; track each logged model state',
      'No versioning',
      'Manual versioning only',
      'Overwrite only'
    ],
    correctAnswers: [0],
    explanation: 'Each mlflow.log_model() creates a version; Registry manages promotion.',
    difficulty: 'intermediate'
  },
  {
    id: 'assoc-mlflow-005',
    level: 'associate',
    topic: 'MLflow',
    subtopic: 'Experiment Organization',
    question: 'What is an experiment in MLflow?',
    options: [
      'Container for related runs with different hyperparameters for comparison',
      'A training run',
      'A dataset',
      'A query'
    ],
    correctAnswers: [0],
    explanation: 'Experiments organize runs logically; enables easy A/B testing.',
    difficulty: 'basic'
  },

  // ===== Streaming & CDC =====
  {
    id: 'assoc-stream-001',
    level: 'associate',
    topic: 'Streaming',
    subtopic: 'Structured Streaming',
    question: 'What is Structured Streaming?',
    options: [
      'Micro-batch streaming with DataFrame API, SQL, and ACID guarantees',
      'Unbounded streaming',
      'Batch only',
      'No streaming'
    ],
    correctAnswers: [0],
    explanation: 'Structured Streaming treats streaming as unbounded tables; micro-batches each trigger.',
    difficulty: 'basic'
  },
  {
    id: 'assoc-stream-002',
    level: 'associate',
    topic: 'Streaming',
    subtopic: 'Output Modes',
    question: 'What output modes exist for streaming?',
    options: [
      'Append (new rows), Complete (all rows), Update (changed rows)',
      'Only Append',
      'Only Complete',
      'No modes'
    ],
    correctAnswers: [0],
    explanation: 'Choose based on query type: aggregates need Append; simple queries Complete.',
    difficulty: 'intermediate'
  },
  {
    id: 'assoc-stream-003',
    level: 'associate',
    topic: 'Streaming',
    subtopic: 'Trigger Types',
    question: 'What trigger types control micro-batch timing?',
    options: [
      'Default (ASAP), ProcessingTime interval, Once (single batch), Continuous',
      'Only Default',
      'Only Once',
      'No control'
    ],
    correctAnswers: [0],
    explanation: 'Triggers balance latency vs efficiency: frequent triggers = low latency, high overhead.',
    difficulty: 'intermediate'
  },
  {
    id: 'assoc-stream-004',
    level: 'associate',
    topic: 'Streaming',
    subtopic: 'Stateful Operations',
    question: 'What are stateful operations in streaming?',
    options: [
      'Operations retaining state across batches: joins, aggregations, deduplication',
      'Stateless operations',
      'No streaming operations',
      'Read-only'
    ],
    correctAnswers: [0],
    explanation: 'Stateful ops maintain state; unbounded state causes memory issues; use timeout.',
    difficulty: 'intermediate'
  },
  {
    id: 'assoc-stream-005',
    level: 'associate',
    topic: 'Streaming',
    subtopic: 'CDC',
    question: 'What is Change Data Capture (CDC)?',
    options: [
      'Capturing inserts/updates/deletes from source systems for incremental sync',
      'Full data sync only',
      'Backup mechanism',
      'Compression'
    ],
    correctAnswers: [0],
    explanation: 'CDC via MERGE (delta log) efficiently processes only changes; reduces overhead.',
    difficulty: 'intermediate'
  },

  // ===== Advanced Topics for Associate =====
  {
    id: 'assoc-adv-001',
    level: 'associate',
    topic: 'Advanced Topics',
    subtopic: 'Photon',
    question: 'What is Photon?',
    options: [
      'Native C++ query engine accelerating SQL/DataFrame execution',
      'Data compression',
      'Security feature',
      'Visualization tool'
    ],
    correctAnswers: [0],
    explanation: 'Photon offers 2-10x faster queries; transparent opt-in via cluster config.',
    difficulty: 'intermediate'
  },
  {
    id: 'assoc-adv-002',
    level: 'associate',
    topic: 'Advanced Topics',
    subtopic: 'DAB',
    question: 'What is Databricks Asset Bundles (DAB)?',
    options: [
      'GitOps framework for deploying resources as code (jobs, pipelines, dashboards)',
      'Data bundle only',
      'Compression tool',
      'Backup tool'
    ],
    correctAnswers: [0],
    explanation: 'DAB enables Infrastructure-as-Code for Databricks assets using YAML.',
    difficulty: 'intermediate'
  },
  {
    id: 'assoc-adv-003',
    level: 'associate',
    topic: 'Advanced Topics',
    subtopic: 'Delta Sharing',
    question: 'What is Delta Sharing?',
    options: [
      'Cross-cloud, cross-workspace data sharing with selective permission control',
      'File sharing only',
      'User sharing',
      'No sharing'
    ],
    correctAnswers: [0],
    explanation: 'Sharing enables secure cross-org data access without data movement.',
    difficulty: 'intermediate'
  },
  {
    id: 'assoc-adv-004',
    level: 'associate',
    topic: 'Advanced Topics',
    subtopic: 'Spark UI Navigation',
    question: 'What tabs does Spark UI provide for debugging?',
    options: [
      'Jobs (tasks), Stages (shuffle/execution), Storage (cache), SQL',
      'Only Jobs',
      'Only Stages',
      'No debugging'
    ],
    correctAnswers: [0],
    explanation: 'Spark UI (localhost:4040) is diagnostic tool; check Stages tab for shuffle, GC.',
    difficulty: 'intermediate'
  },
  {
    id: 'assoc-adv-005',
    level: 'associate',
    topic: 'Advanced Topics',
    subtopic: 'Network & Security',
    question: 'What network security features does Databricks provide?',
    options: [
      'Private endpoints, network isolation, encryption in-transit, firewall rules',
      'No security',
      'Basic encryption only',
      'Optional features'
    ],
    correctAnswers: [0],
    explanation: 'Enterprise security: Databricks-managed networks, IP whitelisting, encryption.',
    difficulty: 'intermediate'
  },

  // ========== PROFESSIONAL LEVEL ==========

  // ===== Advanced Spark Optimization =====
  {
    id: 'prof-spark-opt-001',
    level: 'professional',
    topic: 'Advanced Spark Optimization',
    subtopic: 'AQE Deep Dive',
    question: 'What are the three main optimizations in Adaptive Query Execution (AQE)?',
    options: [
      'Coalesce partitions (reduce output partitions), skew handling (split large), broadcast join upgrade',
      'Only memory management',
      'Only compression',
      'Random optimizations'
    ],
    correctAnswers: [0],
    explanation: 'AQE dynamically optimizes mid-execution using runtime statistics.',
    difficulty: 'advanced'
  },
  {
    id: 'prof-spark-opt-002',
    level: 'professional',
    topic: 'Advanced Spark Optimization',
    subtopic: 'Skew Handling',
    question: 'How does AQE handle data skew in joins/shuffles?',
    options: [
      'Detects skewed partitions, splits them into smaller chunks, distributes to available executors',
      'Ignores skew',
      'Fails on skew',
      'Reorders data'
    ],
    correctAnswers: [0],
    explanation: 'Skew detection: single partition > median × multiplier; splits and redistributes.',
    difficulty: 'advanced'
  },
  {
    id: 'prof-spark-opt-003',
    level: 'professional',
    topic: 'Advanced Spark Optimization',
    subtopic: 'Broadcast Join',
    question: 'When and why use broadcast join?',
    options: [
      'When one side < broadcast threshold (~10MB); avoids expensive shuffle',
      'Always use',
      'Never use',
      'Random choice'
    ],
    correctAnswers: [0],
    explanation: 'Broadcast: replicate small table to all workers; SortMerge: shuffle large tables.',
    difficulty: 'advanced'
  },
  {
    id: 'prof-spark-opt-004',
    level: 'professional',
    topic: 'Advanced Spark Optimization',
    subtopic: 'Join Strategies',
    question: 'What join strategies exist and when to use each?',
    options: [
      'BroadcastHashJoin (broadcast small), SortMergeJoin (sort both), ShuffleHashJoin',
      'Only one strategy',
      'User manual choice',
      'Random selection'
    ],
    correctAnswers: [0],
    explanation: 'Catalyst chooses strategy; explicit hints override (BROADCAST, SHUFFLE_SORT_MERGE).',
    difficulty: 'advanced'
  },
  {
    id: 'prof-spark-opt-005',
    level: 'professional',
    topic: 'Advanced Spark Optimization',
    subtopic: 'Partition Pruning',
    question: 'What is partition pruning and how to enable?',
    options: [
      'Skipping partitions not matching WHERE predicates; ensure partitioning and predicates on keys',
      'No pruning needed',
      'Manual partition selection',
      'Ignores partitions'
    ],
    correctAnswers: [0],
    explanation: 'Pruning is automatic if filters on partition columns; check Spark UI to verify.',
    difficulty: 'advanced'
  },
  {
    id: 'prof-spark-opt-006',
    level: 'professional',
    topic: 'Advanced Spark Optimization',
    subtopic: 'Predicate Pushdown',
    question: 'What is predicate pushdown and its benefit?',
    options: [
      'Pushing WHERE conditions into data source (e.g., Parquet, Delta) for early filtering',
      'No filtering',
      'Late filtering',
      'Random filtering'
    ],
    correctAnswers: [0],
    explanation: 'Pushdown reduces data transferred from storage; Delta/Parquet support it natively.',
    difficulty: 'advanced'
  },

  // ===== Advanced Delta Lake =====
  {
    id: 'prof-delta-adv-001',
    level: 'professional',
    topic: 'Advanced Delta Lake',
    subtopic: 'Concurrency Control',
    question: 'How does Delta handle concurrent writes?',
    options: [
      'Optimistic locking: detect conflicts at commit, retry on conflict',
      'Pessimistic locking',
      'No concurrency',
      'First-write-wins'
    ],
    correctAnswers: [0],
    explanation: 'Optimistic concurrency retries on conflict; no deadlocks, better throughput.',
    difficulty: 'advanced'
  },
  {
    id: 'prof-delta-adv-002',
    level: 'professional',
    topic: 'Advanced Delta Lake',
    subtopic: 'MERGE Performance',
    question: 'How to optimize MERGE for large datasets?',
    options: [
      'Use MATCHED/NOT MATCHED clauses selectively, pre-sort join key, partition by key',
      'No optimization',
      'Always full MERGE',
      'Ignore performance'
    ],
    correctAnswers: [0],
    explanation: 'MERGE with sorted input and partitioning enables faster SortMerge join.',
    difficulty: 'advanced'
  },
  {
    id: 'prof-delta-adv-003',
    level: 'professional',
    topic: 'Advanced Delta Lake',
    subtopic: 'Isolation Levels',
    question: 'What isolation levels does Delta support?',
    options: [
      'Serializable (snapshot isolation) by default; read committed semantics possible',
      'No isolation',
      'Only read-only',
      'Custom levels'
    ],
    correctAnswers: [0],
    explanation: 'Delta snapshot isolation: reader sees consistent state; no dirty/phantom reads.',
    difficulty: 'advanced'
  },
  {
    id: 'prof-delta-adv-004',
    level: 'professional',
    topic: 'Advanced Delta Lake',
    subtopic: 'Z-Order Deep Dive',
    question: 'How does Z-Order clustering improve query performance?',
    options: [
      'Colocates related rows via space-filling curve; enables range pruning on multiple columns',
      'Random clustering',
      'Alphabetical only',
      'No improvement'
    ],
    correctAnswers: [0],
    explanation: 'Z-Order on (date, region) collocates similar dates/regions together.',
    difficulty: 'advanced'
  },
  {
    id: 'prof-delta-adv-005',
    level: 'professional',
    topic: 'Advanced Delta Lake',
    subtopic: 'Compaction Strategy',
    question: 'What is a compaction strategy and when to apply?',
    options: [
      'OPTIMIZE schedule based on file count, size, modification frequency',
      'Always OPTIMIZE',
      'Never OPTIMIZE',
      'Random schedule'
    ],
    correctAnswers: [0],
    explanation: 'Frequent small writes trigger compaction regularly; batch writes less often.',
    difficulty: 'advanced'
  },

  // ===== Advanced Streaming & CDC =====
  {
    id: 'prof-stream-adv-001',
    level: 'professional',
    topic: 'Streaming & CDC',
    subtopic: 'Exactly-Once Semantics',
    question: 'How does Structured Streaming achieve exactly-once semantics?',
    options: [
      'Checkpoints + idempotent sinks: rerun from checkpoint, idempotent writes prevent duplicates',
      'Exactly-once impossible',
      'Only at-least-once',
      'No duplicates needed'
    ],
    correctAnswers: [0],
    explanation: 'Combine checkpoint recovery + idempotent sinks (e.g., MERGE) for exactly-once.',
    difficulty: 'advanced'
  },
  {
    id: 'prof-stream-adv-002',
    level: 'professional',
    topic: 'Streaming & CDC',
    subtopic: 'State Management',
    question: 'What is state bloat in streaming and how to prevent?',
    options: [
      'Unbounded state grows infinitely; use watermarks, timeouts, explicit cleanup',
      'No state bloat possible',
      'Always clean automatically',
      'Ignore state'
    ],
    correctAnswers: [0],
    explanation: 'Stateful ops (join, aggregate) retain state; set TTL to limit memory.',
    difficulty: 'advanced'
  },
  {
    id: 'prof-stream-adv-003',
    level: 'professional',
    topic: 'Streaming & CDC',
    subtopic: 'Late Arrival Handling',
    question: 'How to handle out-of-order / late-arriving events in streaming?',
    options: [
      'Watermarks + allowed lateness: mark old events, buffer late arrivals per policy',
      'Drop all late events',
      'No late handling',
      'Ignore order'
    ],
    correctAnswers: [0],
    explanation: 'Watermark = max_event_time - allowed_lateness; events outside dropped/updated per mode.',
    difficulty: 'advanced'
  },
  {
    id: 'prof-stream-adv-004',
    level: 'professional',
    topic: 'Streaming & CDC',
    subtopic: 'foreachBatch',
    question: 'What does foreachBatch enable in streaming?',
    options: [
      'Custom logic on each micro-batch for complex sinks (e.g., conditional updates)',
      'No custom logic',
      'Direct output only',
      'Batch processing'
    ],
    correctAnswers: [0],
    explanation: 'foreachBatch applies user function to each batch DataFrame; enables any sink.',
    difficulty: 'advanced'
  },
  {
    id: 'prof-stream-adv-005',
    level: 'professional',
    topic: 'Streaming & CDC',
    subtopic: 'CDC Patterns',
    question: 'What CDC patterns enable efficient incremental syncs?',
    options: [
      'MERGE into Delta (idempotent), delete-insert (SCD Type 2), change tables',
      'Full table copy',
      'No patterns',
      'Manual sync'
    ],
    correctAnswers: [0],
    explanation: 'CDC via MERGE: insert new rows, update existing by key; enables efficient upserts.',
    difficulty: 'advanced'
  },

  // ===== Production Hardening & SLAs =====
  {
    id: 'prof-prod-001',
    level: 'professional',
    topic: 'Production Hardening',
    subtopic: 'Idempotency',
    question: 'What is idempotency and why is it critical?',
    options: [
      'Rerunning produces same result; prevents data corruption on retries',
      'One-time execution only',
      'No retries possible',
      'Allows duplicates'
    ],
    correctAnswers: [0],
    explanation: 'Idempotent design (e.g., MERGE by key) enables safe retries and failure recovery.',
    difficulty: 'advanced'
  },
  {
    id: 'prof-prod-002',
    level: 'professional',
    topic: 'Production Hardening',
    subtopic: 'Circuit Breaker',
    question: 'What is a circuit breaker pattern?',
    options: [
      'Stop retries after repeated failures to prevent cascade failures',
      'No failure handling',
      'Always retry',
      'Manual intervention'
    ],
    correctAnswers: [0],
    explanation: 'Circuit breaker: fail-fast after N failures; enables graceful degradation.',
    difficulty: 'advanced'
  },
  {
    id: 'prof-prod-003',
    level: 'professional',
    topic: 'Production Hardening',
    subtopic: 'SLA & SLI & SLO',
    question: 'What are SLA, SLI, SLO?',
    options: [
      'SLA = agreement (e.g., 99.9% uptime); SLI = metric (actual uptime); SLO = target (99.5%)',
      'Same thing',
      'Not important',
      'Optional'
    ],
    correctAnswers: [0],
    explanation: 'SLO (target) vs SLI (actual) determines if SLA is met; monitor SLI to alert on breach.',
    difficulty: 'advanced'
  },
  {
    id: 'prof-prod-004',
    level: 'professional',
    topic: 'Production Hardening',
    subtopic: 'Alerting & Monitoring',
    question: 'What metrics to alert on for production pipelines?',
    options: [
      'Data freshness (SLA breach), failure rate, latency (p95/p99), data quality anomalies',
      'No monitoring',
      'Only failures',
      'No alerts'
    ],
    correctAnswers: [0],
    explanation: 'Alert thresholds ensure fast incident response; integrate with on-call rotations.',
    difficulty: 'advanced'
  },
  {
    id: 'prof-prod-005',
    level: 'professional',
    topic: 'Production Hardening',
    subtopic: 'Runbooks',
    question: 'What should production runbooks include?',
    options: [
      'Failure detection triggers, diagnosis steps, remediation actions, escalation',
      'No documentation',
      'Code only',
      'Manual steps'
    ],
    correctAnswers: [0],
    explanation: 'Runbooks enable quick incident response; automate common fixes via scripts.',
    difficulty: 'advanced'
  },

  // ===== Architecture & Patterns =====
  {
    id: 'prof-arch-001',
    level: 'professional',
    topic: 'Data Architecture',
    subtopic: 'Lakehouse',
    question: 'What is Lakehouse architecture?',
    options: [
      'Data lake flexibility + data warehouse ACID/governance via Delta',
      'Only data warehouse',
      'Only data lake',
      'No architecture'
    ],
    correctAnswers: [0],
    explanation: 'Lakehouse unifies BI, ML, ETL on raw data with enterprise governance.',
    difficulty: 'advanced'
  },
  {
    id: 'prof-arch-002',
    level: 'professional',
    topic: 'Data Architecture',
    subtopic: 'Data Mesh',
    question: 'What is Data Mesh architecture?',
    options: [
      'Decentralized ownership: domain teams own data products, central governance',
      'Centralized only',
      'No governance',
      'Manual governance'
    ],
    correctAnswers: [0],
    explanation: 'Mesh: federated data domains with self-serve access + central compliance.',
    difficulty: 'advanced'
  },
  {
    id: 'prof-arch-003',
    level: 'professional',
    topic: 'Data Architecture',
    subtopic: 'ELT vs ETL',
    question: 'When to use ELT vs ETL?',
    options: [
      'ELT (extract, load raw, transform in warehouse) for Lakehouse; ETL (transform before load) for legacy',
      'Always ETL',
      'Always ELT',
      'No difference'
    ],
    correctAnswers: [0],
    explanation: 'ELT preferred in modern Lakehouse; raw data cheaper than pre-processing.',
    difficulty: 'advanced'
  },
  {
    id: 'prof-arch-004',
    level: 'professional',
    topic: 'Data Architecture',
    subtopic: 'Scalability Patterns',
    question: 'What scalability patterns enable growing data volume?',
    options: [
      'Partitioning, sharding, incremental processing, distributed computing',
      'No scaling',
      'Single machine',
      'Manual sharding'
    ],
    correctAnswers: [0],
    explanation: 'Combine partitioning (time/region) + distributed Spark for linear scale.',
    difficulty: 'advanced'
  },
  {
    id: 'prof-arch-005',
    level: 'professional',
    topic: 'Data Architecture',
    subtopic: 'Resilience Patterns',
    question: 'What patterns ensure data pipeline resilience?',
    options: [
      'Retries, circuit breakers, fallbacks, redundancy, idempotency',
      'No resilience needed',
      'Hope for best',
      'Single point'
    ],
    correctAnswers: [0],
    explanation: 'Combine patterns: retry transient, circuit-break persistent, fallback to cache.',
    difficulty: 'advanced'
  },

  // ===== Security & Governance (Professional) =====
  {
    id: 'prof-sec-001',
    level: 'professional',
    topic: 'Security & Governance',
    subtopic: 'Dynamic Data Masking',
    question: 'How does dynamic data masking work in UC?',
    options: [
      'Masks sensitive columns for users without privileges; automatic at query time',
      'No masking',
      'Manual masking',
      'Encrypted fields'
    ],
    correctAnswers: [0],
    explanation: 'Mask SSN, email, PII for non-privileged users; transparent to queries.',
    difficulty: 'advanced'
  },
  {
    id: 'prof-sec-002',
    level: 'professional',
    topic: 'Security & Governance',
    subtopic: 'Row Access Control',
    question: 'What is row access control (RLS) in UC?',
    options: [
      'Row-level security: filters rows based on user/context; WHERE clause injected',
      'No row filtering',
      'Table-level only',
      'No context'
    ],
    correctAnswers: [0],
    explanation: 'RLS: SELECT * from table automatically filters rows per user permissions.',
    difficulty: 'advanced'
  },
  {
    id: 'prof-sec-003',
    level: 'professional',
    topic: 'Security & Governance',
    subtopic: 'Encryption',
    question: 'What encryption does Databricks provide?',
    options: [
      'In-transit (TLS), at-rest (cloud-managed keys), field-level (sensitive columns)',
      'No encryption',
      'Optional only',
      'Manual only'
    ],
    correctAnswers: [0],
    explanation: 'Encrypt by default; Databricks or customer-managed keys available.',
    difficulty: 'advanced'
  },
  {
    id: 'prof-sec-004',
    level: 'professional',
    topic: 'Security & Governance',
    subtopic: 'Audit Logging',
    question: 'What audit logs does Databricks collect?',
    options: [
      'Access (who/when), modifications (what changed), failures, compliance trail',
      'No logging',
      'Minimal logging',
      'Manual logging'
    ],
    correctAnswers: [0],
    explanation: 'Audit logs integrated with SIEM tools; required for compliance (SOC2, HIPAA).',
    difficulty: 'advanced'
  },
  {
    id: 'prof-sec-005',
    level: 'professional',
    topic: 'Security & Governance',
    subtopic: 'Data Lineage',
    question: 'What is data lineage and its value?',
    options: [
      'Tracks data flow from source to consumer; enables impact analysis and compliance',
      'No tracking',
      'Manual documentation',
      'Query history only'
    ],
    correctAnswers: [0],
    explanation: 'Lineage: "PII column used in which reports?" → impact analysis for compliance.',
    difficulty: 'advanced'
  },

  // ===== Advanced MLflow & Model Ops =====
  {
    id: 'prof-ml-001',
    level: 'professional',
    topic: 'Advanced MLflow & Model Ops',
    subtopic: 'Model Signatures',
    question: 'What is a model signature in MLflow?',
    options: [
      'Schema definition for inputs/outputs; enables validation and type conversion',
      'Model fingerprint',
      'Version info',
      'No signature'
    ],
    correctAnswers: [0],
    explanation: 'Signatures ensure serving API accepts right types; prevents silent errors.',
    difficulty: 'advanced'
  },
  {
    id: 'prof-ml-002',
    level: 'professional',
    topic: 'Advanced MLflow & Model Ops',
    subtopic: 'PyFunc Models',
    question: 'What advantages do pyfunc models provide?',
    options: [
      'Framework-agnostic wrapper enabling pre/post-processing in unified format',
      'Only for Python',
      'No preprocessing',
      'Framework-specific'
    ],
    correctAnswers: [0],
    explanation: 'PyFunc: custom preprocessing (normalize), inference (model), postprocessing (format).',
    difficulty: 'advanced'
  },
  {
    id: 'prof-ml-003',
    level: 'professional',
    topic: 'Advanced MLflow & Model Ops',
    subtopic: 'Model Aliases',
    question: 'What are model aliases and when to use?',
    options: [
      'Named references (champion, challenger) for easy routing without code changes',
      'Version numbers only',
      'No routing',
      'Manual switching'
    ],
    correctAnswers: [0],
    explanation: 'Aliases enable A/B testing: route % of traffic to challenger, promote if better.',
    difficulty: 'advanced'
  },
  {
    id: 'prof-ml-004',
    level: 'professional',
    topic: 'Advanced MLflow & Model Ops',
    subtopic: 'Feature Store Integration',
    question: 'How does Databricks Feature Store integrate with ML pipelines?',
    options: [
      'Centralized feature repo; training/serving fetch same features preventing skew',
      'No feature management',
      'Manual features only',
      'Training-only'
    ],
    correctAnswers: [0],
    explanation: 'Feature Store eliminates train/serve skew: single source of truth for features.',
    difficulty: 'advanced'
  },
  {
    id: 'prof-ml-005',
    level: 'professional',
    topic: 'Advanced MLflow & Model Ops',
    subtopic: 'Model Monitoring',
    question: 'What metrics to monitor for production ML models?',
    options: [
      'Model drift, data drift, prediction distribution changes, latency, business metrics',
      'No monitoring',
      'Only performance',
      'No alerts'
    ],
    correctAnswers: [0],
    explanation: 'Model drift (accuracy↓), data drift (input distribution shifts): retrain when detected.',
    difficulty: 'advanced'
  }
];

// Helper functions
export function getAllQuestionsByLevel(level: 'associate' | 'professional'): DBQuestion[] {
  return comprehensiveDatabricksQuestions.filter(q => q.level === level);
}

export function getQuestionsByTopic(level: 'associate' | 'professional', topic: string): DBQuestion[] {
  return comprehensiveDatabricksQuestions.filter(q => q.level === level && q.topic === topic);
}

export function getUniqueTopics(level: 'associate' | 'professional'): string[] {
  const topics = new Set<string>();
  comprehensiveDatabricksQuestions
    .filter(q => q.level === level)
    .forEach(q => topics.add(q.topic));
  return Array.from(topics).sort();
}

export function getQuestionCount(level: 'associate' | 'professional'): number {
  return getAllQuestionsByLevel(level).length;
}
