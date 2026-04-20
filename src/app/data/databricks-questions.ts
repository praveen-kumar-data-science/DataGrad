// Databricks Certified Data Engineer Exam Questions Bank
// Associate & Professional Level

export interface DatabricksQuestion {
  id: string;
  level: 'associate' | 'professional';
  topic: string;
  question: string;
  options: string[];
  correctAnswers: number[];
  explanation: string;
  difficulty: 'basic' | 'intermediate' | 'advanced';
}

export const databricksQuestions: DatabricksQuestion[] = [
  // ============ ASSOCIATE LEVEL - Delta Lake ============
  {
    id: 'assoc-delta-001',
    level: 'associate',
    topic: 'Delta Lake Fundamentals',
    question: 'What is the primary advantage of Delta Lake over standard data lakes?',
    options: [
      'ACID transactions and data versioning',
      'Lower storage costs',
      'Faster query execution',
      'Reduced memory usage'
    ],
    correctAnswers: [0],
    explanation: 'Delta Lake provides ACID transactions, schema enforcement, and time travel capabilities, ensuring data reliability.',
    difficulty: 'basic'
  },
  {
    id: 'assoc-delta-002',
    level: 'associate',
    topic: 'Delta Lake Fundamentals',
    question: 'Which command is used to enable time travel in Delta Lake?',
    options: [
      'RESTORE TABLE AS OF',
      'SELECT * FROM table VERSION AS OF',
      'ROLLBACK TO VERSION',
      'REVERT TABLE'
    ],
    correctAnswers: [1],
    explanation: 'SELECT * FROM table_name VERSION AS OF <timestamp or version> allows time travel queries.',
    difficulty: 'basic'
  },
  {
    id: 'assoc-delta-003',
    level: 'associate',
    topic: 'Delta Lake Fundamentals',
    question: 'What does the OPTIMIZE command do in Delta Lake?',
    options: [
      'Compacts small files into larger files',
      'Removes all historical versions',
      'Reduces schema complexity',
      'Encrypts the data'
    ],
    correctAnswers: [0],
    explanation: 'OPTIMIZE rewrites files to improve query performance by reducing the number of small files.',
    difficulty: 'basic'
  },
  {
    id: 'assoc-delta-004',
    level: 'associate',
    topic: 'Delta Lake Fundamentals',
    question: 'How does Delta Lake ensure schema enforcement?',
    options: [
      'Rejects writes that do not match the table schema',
      'Automatically adds new columns',
      'Converts data types automatically',
      'Ignores mismatched columns'
    ],
    correctAnswers: [0],
    explanation: 'Delta Lake enforces schema by rejecting writes that do not match, preventing schema drift issues.',
    difficulty: 'basic'
  },
  {
    id: 'assoc-delta-005',
    level: 'associate',
    topic: 'Delta Lake Fundamentals',
    question: 'What is the transaction log in Delta Lake?',
    options: [
      'An ordered list of all modifications to a table',
      'A security audit trail',
      'A backup copy of data',
      'A query performance log'
    ],
    correctAnswers: [0],
    explanation: 'The transaction log (_delta_log) records all changes, enabling atomicity and time travel.',
    difficulty: 'intermediate'
  },

  // ============ ASSOCIATE LEVEL - Spark Fundamentals ============
  {
    id: 'assoc-spark-001',
    level: 'associate',
    topic: 'Spark Fundamentals',
    question: 'What is the difference between a Spark RDD and a DataFrame?',
    options: [
      'RDD is untyped, DataFrame is typed with schema',
      'RDD is faster than DataFrame',
      'DataFrame cannot be optimized',
      'RDD supports SQL queries'
    ],
    correctAnswers: [0],
    explanation: 'RDDs are low-level collections without schema; DataFrames are optimized with schema and SQL support.',
    difficulty: 'basic'
  },
  {
    id: 'assoc-spark-002',
    level: 'associate',
    topic: 'Spark Fundamentals',
    question: 'What is a Spark action?',
    options: [
      'An operation that returns data to the driver or writes to storage',
      'A transformation that creates a new RDD',
      'A lazy operation',
      'A data aggregation'
    ],
    correctAnswers: [0],
    explanation: 'Actions trigger computation and return results (collect, show, write) unlike transformations which are lazy.',
    difficulty: 'basic'
  },
  {
    id: 'assoc-spark-003',
    level: 'associate',
    topic: 'Spark Fundamentals',
    question: 'What does the Catalyst optimizer do?',
    options: [
      'Optimizes SQL query execution plans',
      'Converts Python to Scala',
      'Manages memory allocation',
      'Handles data serialization'
    ],
    correctAnswers: [0],
    explanation: 'Catalyst optimizes logical plans into efficient physical execution plans using rule-based and cost-based optimization.',
    difficulty: 'intermediate'
  },
  {
    id: 'assoc-spark-004',
    level: 'associate',
    topic: 'Spark Fundamentals',
    question: 'What is partitioning in Spark?',
    options: [
      'Dividing data into logical chunks distributed across clusters',
      'Splitting queries across multiple databases',
      'Creating table indexes',
      'Compressing data'
    ],
    correctAnswers: [0],
    explanation: 'Partitioning distributes data across cluster nodes for parallel processing.',
    difficulty: 'basic'
  },
  {
    id: 'assoc-spark-005',
    level: 'associate',
    topic: 'Spark Fundamentals',
    question: 'How does Spark handle narrow vs wide transformations?',
    options: [
      'Narrow requires no shuffle, wide requires data repartitioning',
      'Narrow is faster but wide is more reliable',
      'Wide transformations are preferred',
      'Narrow transformations cannot be cached'
    ],
    correctAnswers: [0],
    explanation: 'Narrow transformations (map, filter) require no shuffle; wide transformations (join, group) require shuffling data across partitions.',
    difficulty: 'intermediate'
  },

  // ============ ASSOCIATE LEVEL - Data Ingestion ============
  {
    id: 'assoc-ingest-001',
    level: 'associate',
    topic: 'Data Ingestion',
    question: 'What is Auto Loader in Databricks?',
    options: [
      'Automatically ingests new files as they arrive in cloud storage',
      'A machine learning feature',
      'A query optimizer',
      'A data quality tool'
    ],
    correctAnswers: [0],
    explanation: 'Auto Loader detects new files in S3/ADLS and automatically triggers incremental ingestion pipelines.',
    difficulty: 'basic'
  },
  {
    id: 'assoc-ingest-002',
    level: 'associate',
    topic: 'Data Ingestion',
    question: 'Which mode should you use for continuously ingesting streaming data?',
    options: [
      'Append or Complete mode based on requirements',
      'Update mode only',
      'Overwrite mode',
      'Copy mode'
    ],
    correctAnswers: [0],
    explanation: 'Append adds only new records; Complete rewrites entire output. Choose based on downstream requirements.',
    difficulty: 'basic'
  },
  {
    id: 'assoc-ingest-003',
    level: 'associate',
    topic: 'Data Ingestion',
    question: 'What is schema inference in Auto Loader?',
    options: [
      'Automatically detecting and applying schema to incoming files',
      'Manual schema definition',
      'Creating multiple schemas',
      'Deleting old schemas'
    ],
    correctAnswers: [0],
    explanation: 'Auto Loader can automatically infer schemas from sample files, saving setup time.',
    difficulty: 'basic'
  },
  {
    id: 'assoc-ingest-004',
    level: 'associate',
    topic: 'Data Ingestion',
    question: 'How do you handle late-arriving data in streaming ingestion?',
    options: [
      'Using watermarking and allowed lateness thresholds',
      'Dropping all late data',
      'Restarting the pipeline',
      'Manual recovery'
    ],
    correctAnswers: [0],
    explanation: 'Watermarking defines how late data is handled; you set allowed lateness to buffer delayed arrivals.',
    difficulty: 'intermediate'
  },
  {
    id: 'assoc-ingest-005',
    level: 'associate',
    topic: 'Data Ingestion',
    question: 'What is the purpose of checkpointing in streaming?',
    options: [
      'Tracking progress and enabling fault recovery',
      'Storing backup copies',
      'Compressing data',
      'Validating schema'
    ],
    correctAnswers: [0],
    explanation: 'Checkpoints record offsets/positions, allowing pipelines to resume from the exact point of failure.',
    difficulty: 'intermediate'
  },

  // ============ ASSOCIATE LEVEL - Unity Catalog ============
  {
    id: 'assoc-uc-001',
    level: 'associate',
    topic: 'Unity Catalog',
    question: 'What are the three levels of the Unity Catalog namespace hierarchy?',
    options: [
      'Metastore > Catalog > Schema > Table',
      'Database > Catalog > Table',
      'Workspace > Database > Table',
      'Cluster > Schema > Table'
    ],
    correctAnswers: [0],
    explanation: 'Unity Catalog uses Metastore (organization level) > Catalog (business unit) > Schema (project) > Table (asset).',
    difficulty: 'basic'
  },
  {
    id: 'assoc-uc-002',
    level: 'associate',
    topic: 'Unity Catalog',
    question: 'What does role-based access control (RBAC) in Unity Catalog enable?',
    options: [
      'Granular permissions on catalogs, schemas, and tables',
      'Full access to all users',
      'Query optimization',
      'Data compression'
    ],
    correctAnswers: [0],
    explanation: 'RBAC allows fine-grained permission assignment (READ, WRITE, ADMIN) at multiple levels.',
    difficulty: 'basic'
  },
  {
    id: 'assoc-uc-003',
    level: 'associate',
    topic: 'Unity Catalog',
    question: 'What is a principal in Unity Catalog?',
    options: [
      'A user or service principal that can be granted permissions',
      'A database object',
      'A query optimizer',
      'A backup strategy'
    ],
    correctAnswers: [0],
    explanation: 'Principals are identities (users, groups, service principals) to which you grant permissions.',
    difficulty: 'basic'
  },
  {
    id: 'assoc-uc-004',
    level: 'associate',
    topic: 'Unity Catalog',
    question: 'How does Unity Catalog provide data lineage?',
    options: [
      'Tracking which tables/notebooks access specific data assets',
      'Recording query execution time',
      'Storing backup history',
      'Monitoring user login'
    ],
    correctAnswers: [0],
    explanation: 'Lineage shows upstream sources and downstream consumers of data, enabling impact analysis.',
    difficulty: 'intermediate'
  },
  {
    id: 'assoc-uc-005',
    level: 'associate',
    topic: 'Unity Catalog',
    question: 'What is a managed table in Unity Catalog?',
    options: [
      'Data and metadata stored in Unity Catalog location',
      'An external table only',
      'A view definition',
      'A temporary table'
    ],
    correctAnswers: [0],
    explanation: 'Managed tables store both data and metadata in UC, providing full lifecycle management.',
    difficulty: 'intermediate'
  },

  // ============ ASSOCIATE LEVEL - MLflow ============
  {
    id: 'assoc-ml-001',
    level: 'associate',
    topic: 'MLflow',
    question: 'What does MLflow Tracking do?',
    options: [
      'Records parameters, metrics, and artifacts for model experiments',
      'Deploys models to production',
      'Trains models automatically',
      'Compresses model files'
    ],
    correctAnswers: [0],
    explanation: 'MLflow Tracking logs hyperparameters, metrics, and model artifacts for experiment comparison.',
    difficulty: 'basic'
  },
  {
    id: 'assoc-ml-002',
    level: 'associate',
    topic: 'MLflow',
    question: 'What is a model stage in MLflow Registry?',
    options: [
      'Production, Staging, or Archived - representing model lifecycle',
      'Training phase',
      'Data preparation step',
      'Hyperparameter tuning'
    ],
    correctAnswers: [0],
    explanation: 'Model stages track progression: None (new) > Staging (testing) > Production (live) > Archived.',
    difficulty: 'basic'
  },
  {
    id: 'assoc-ml-003',
    level: 'associate',
    topic: 'MLflow',
    question: 'What is model serving in MLflow?',
    options: [
      'Deploying trained models as REST API endpoints',
      'Training models',
      'Logging metrics',
      'Feature engineering'
    ],
    correctAnswers: [0],
    explanation: 'MLflow Model Serving hosts models behind REST APIs for batch and real-time inference.',
    difficulty: 'basic'
  },
  {
    id: 'assoc-ml-004',
    level: 'associate',
    topic: 'MLflow',
    question: 'What does mlflow.log_model() do?',
    options: [
      'Saves a trained model with dependencies and flavors for deployment',
      'Tracks hyperparameters',
      'Compares model versions',
      'Deploys to production'
    ],
    correctAnswers: [0],
    explanation: 'log_model packages the model, conda environment, and code for reproducible deployment.',
    difficulty: 'intermediate'
  },
  {
    id: 'assoc-ml-005',
    level: 'associate',
    topic: 'MLflow',
    question: 'What is an experiment in MLflow?',
    options: [
      'A container for related runs/trials with different hyperparameters',
      'A production model',
      'A data pipeline',
      'A query'
    ],
    correctAnswers: [0],
    explanation: 'Experiments organize runs logically, enabling comparison of model variants.',
    difficulty: 'basic'
  },

  // ============ PROFESSIONAL LEVEL - Advanced Spark Optimization ============
  {
    id: 'prof-opt-001',
    level: 'professional',
    topic: 'Advanced Spark Optimization',
    question: 'What is Adaptive Query Execution (AQE) in Spark?',
    options: [
      'Dynamically adjusts execution plans during runtime based on runtime statistics',
      'Pre-optimizes queries before execution',
      'Manually tunes SQL queries',
      'Compresses intermediate results'
    ],
    correctAnswers: [0],
    explanation: 'AQE re-optimizes during execution using actual data distribution, reducing memory spill and skew.',
    difficulty: 'advanced'
  },
  {
    id: 'prof-opt-002',
    level: 'professional',
    topic: 'Advanced Spark Optimization',
    question: 'How does skew handling in AQE work?',
    options: [
      'Automatically splits skewed partitions during joins/shuffles',
      'Increases memory allocation',
      'Changes algorithm',
      'Replicates data'
    ],
    correctAnswers: [0],
    explanation: 'AQE detects and splits skewed partitions into smaller chunks for balanced processing.',
    difficulty: 'advanced'
  },
  {
    id: 'prof-opt-003',
    level: 'professional',
    topic: 'Advanced Spark Optimization',
    question: 'What is the purpose of coalesce partitions in AQE?',
    options: [
      'Reduces partition count after filtering to avoid small partitions',
      'Increases parallelism',
      'Compresses data',
      'Sorts data'
    ],
    correctAnswers: [0],
    explanation: 'Coalesce merges small partitions post-filtering to reduce shuffle overhead and task count.',
    difficulty: 'advanced'
  },
  {
    id: 'prof-opt-004',
    level: 'professional',
    topic: 'Advanced Spark Optimization',
    question: 'What is a broadcast join and when should it be used?',
    options: [
      'Broadcasting small table to all workers; use when one side < broadcast threshold',
      'Shuffling both tables',
      'Using hash joins only',
      'Always preferred over sort-merge'
    ],
    correctAnswers: [0],
    explanation: 'Broadcast avoids shuffle by replicating small table across executors. Ideal for dimensional tables.',
    difficulty: 'advanced'
  },
  {
    id: 'prof-opt-005',
    level: 'professional',
    topic: 'Advanced Spark Optimization',
    question: 'How do you diagnose Spark shuffles and shuffle spill?',
    options: [
      'Analyzing Spark UI, checking shuffle read/write metrics, and examining executor memory',
      'Using print statements',
      'Counting queries',
      'Checking log file size'
    ],
    correctAnswers: [0],
    explanation: 'Spark UI Stages tab reveals shuffle metrics; high spill indicates partition/memory issues.',
    difficulty: 'advanced'
  },

  // ============ PROFESSIONAL LEVEL - Advanced Delta Lake ============
  {
    id: 'prof-delta-001',
    level: 'professional',
    topic: 'Advanced Delta Lake',
    question: 'What is Z-Ordering in Delta Lake?',
    options: [
      'Colocating related data by sort key to reduce data skipping and improve queries',
      'Sorting rows randomly',
      'Encrypting data',
      'Creating indexes'
    ],
    correctAnswers: [0],
    explanation: 'Z-Order clusters related data together, enabling efficient range filtering and reducing full scans.',
    difficulty: 'advanced'
  },
  {
    id: 'prof-delta-002',
    level: 'professional',
    topic: 'Advanced Delta Lake',
    question: 'What is the MERGE command in Delta Lake used for?',
    options: [
      'Upserting data (insert/update/delete in one operation)',
      'Creating backups',
      'Compressing files',
      'Removing duplicates'
    ],
    correctAnswers: [0],
    explanation: 'MERGE enables upserts with MATCHED/NOT MATCHED clauses for efficient incremental updates.',
    difficulty: 'advanced'
  },
  {
    id: 'prof-delta-003',
    level: 'professional',
    topic: 'Advanced Delta Lake',
    question: 'How does Delta Lake handle concurrency control?',
    options: [
      'Using optimistic locking with transaction isolation levels',
      'File-level locks',
      'No concurrency support',
      'Manual conflict resolution'
    ],
    correctAnswers: [0],
    explanation: 'Delta uses optimistic concurrency: detects conflicts at commit, retries on conflict.',
    difficulty: 'advanced'
  },
  {
    id: 'prof-delta-004',
    level: 'professional',
    topic: 'Advanced Delta Lake',
    question: 'What is data compaction and how does OPTIMIZE handle it?',
    options: [
      'Rewriting many small files into fewer large files using OPTIMIZE',
      'Removing all data older than 30 days',
      'Encrypting sensitive data',
      'Creating views'
    ],
    correctAnswers: [0],
    explanation: 'OPTIMIZE rewrites partitions, merging small files to reduce metadata overhead and improve query speed.',
    difficulty: 'advanced'
  },
  {
    id: 'prof-delta-005',
    level: 'professional',
    topic: 'Advanced Delta Lake',
    question: 'What is liquid clustering in Delta Lake?',
    options: [
      'A new clustering feature that adapts dynamically to query patterns',
      'Removing clusters',
      'A backup strategy',
      'Version control'
    ],
    correctAnswers: [0],
    explanation: 'Liquid clustering automatically re-clusters data based on access patterns without manual partitioning.',
    difficulty: 'advanced'
  },

  // ============ PROFESSIONAL LEVEL - Streaming & CDC ============
  {
    id: 'prof-stream-001',
    level: 'professional',
    topic: 'Streaming & CDC',
    question: 'What is Change Data Capture (CDC) in Databricks?',
    options: [
      'Capturing and propagating inserts, updates, and deletes efficiently',
      'Backing up all data',
      'Compressing files',
      'Creating snapshots'
    ],
    correctAnswers: [0],
    explanation: 'CDC (via MERGE into Delta) efficiently processes only changed rows, reducing processing overhead.',
    difficulty: 'advanced'
  },
  {
    id: 'prof-stream-002',
    level: 'professional',
    topic: 'Streaming & CDC',
    question: 'How does Databricks Structured Streaming handle exactly-once semantics?',
    options: [
      'Using idempotent sinks and checkpoints to prevent duplicates',
      'Disabling retries',
      'Using single-partition writes',
      'No guarantees'
    ],
    correctAnswers: [0],
    explanation: 'Exactly-once combines checkpoint recovery with idempotent writes (e.g., UPDATE without INSERT duplicate).',
    difficulty: 'advanced'
  },
  {
    id: 'prof-stream-003',
    level: 'professional',
    topic: 'Streaming & CDC',
    question: 'What is a foreachBatch sink in Structured Streaming?',
    options: [
      'Custom logic applied to each micro-batch for flexible output',
      'Writing to single file',
      'Compressing data',
      'Creating aggregates'
    ],
    correctAnswers: [0],
    explanation: 'foreachBatch allows custom processing of each batch, enabling complex sinks like complex database updates.',
    difficulty: 'advanced'
  },
  {
    id: 'prof-stream-004',
    level: 'professional',
    topic: 'Streaming & CDC',
    question: 'How do you handle late arrivals in event time streaming?',
    options: [
      'Using watermarks and allowed lateness with stateful updates',
      'Dropping all late data immediately',
      'Buffering indefinitely',
      'Restarting the stream'
    ],
    correctAnswers: [0],
    explanation: 'Watermarking marks "old" events; allowed lateness buffers late arrivals for output updates.',
    difficulty: 'advanced'
  },
  {
    id: 'prof-stream-005',
    level: 'professional',
    topic: 'Streaming & CDC',
    question: 'What is a stateful operation in streaming and why is state management important?',
    options: [
      'Operations like joins/aggregations that retain previous micro-batch data; state bloat risks memory overflow',
      'SQL queries',
      'File operations',
      'Logging'
    ],
    correctAnswers: [0],
    explanation: 'Stateful ops track state across batches; unbounded state causes memory issues; use timeout/watermarks to limit.',
    difficulty: 'advanced'
  },

  // ============ PROFESSIONAL LEVEL - Production Hardening ============
  {
    id: 'prof-hard-001',
    level: 'professional',
    topic: 'Production Hardening',
    question: 'What is a retry policy in production Databricks jobs?',
    options: [
      'Configuring automatic job restarts on failure with exponential backoff',
      'No restart capability',
      'Manual retry only',
      'Logging failures'
    ],
    correctAnswers: [0],
    explanation: 'Retry policies auto-restart failed jobs with backoff, improving resilience to transient issues.',
    difficulty: 'advanced'
  },
  {
    id: 'prof-hard-002',
    level: 'professional',
    topic: 'Production Hardening',
    question: 'What does alerting and monitoring in Databricks Jobs involve?',
    options: [
      'Setting thresholds for job duration, failure rate, and data quality metrics',
      'No monitoring available',
      'Manual checks only',
      'Ignoring failures'
    ],
    correctAnswers: [0],
    explanation: 'Monitoring tracks job health; alerts notify on SLA breaches, enabling proactive issue resolution.',
    difficulty: 'advanced'
  },
  {
    id: 'prof-hard-003',
    level: 'professional',
    topic: 'Production Hardening',
    question: 'How do you implement idempotency in data pipelines?',
    options: [
      'Designing operations to produce same result when run multiple times',
      'Running once and backing up',
      'Using volatile storage',
      'Disabling caching'
    ],
    correctAnswers: [0],
    explanation: 'Idempotency (e.g., MERGE with deduplication) ensures reruns don\'t corrupt data, enabling safe retries.',
    difficulty: 'advanced'
  },
  {
    id: 'prof-hard-004',
    level: 'professional',
    topic: 'Production Hardening',
    question: 'What is a circuit breaker pattern in production pipelines?',
    options: [
      'Stopping pipeline execution on repeated failures to prevent cascade failures',
      'Speeding up execution',
      'Caching everything',
      'Random restarts'
    ],
    correctAnswers: [0],
    explanation: 'Circuit breaker prevents cascading failures by stopping retries after thresholds; enables graceful degradation.',
    difficulty: 'advanced'
  },
  {
    id: 'prof-hard-005',
    level: 'professional',
    topic: 'Production Hardening',
    question: 'What are SLAs (Service Level Agreements) for data pipelines?',
    options: [
      'Defined data freshness and availability targets with SLO/SLI metrics',
      'Customer contracts only',
      'No relevance to data',
      'Optional features'
    ],
    correctAnswers: [0],
    explanation: 'SLAs define expectations (e.g., "data refreshed hourly"); SLIs measure actual performance; monitoring tracks SLO.',
    difficulty: 'advanced'
  },

  // ============ MORE ASSOCIATE LEVEL QUESTIONS ============
  {
    id: 'assoc-dlt-001',
    level: 'associate',
    topic: 'Delta Live Tables',
    question: 'What is Delta Live Tables (DLT)?',
    options: [
      'A declarative framework for building reliable data pipelines with automatic lineage',
      'A query tool',
      'A backup system',
      'A visualization tool'
    ],
    correctAnswers: [0],
    explanation: 'DLT lets you define data transformations declaratively; Databricks handles orchestration, monitoring, and quality.',
    difficulty: 'basic'
  },
  {
    id: 'assoc-dlt-002',
    level: 'associate',
    topic: 'Delta Live Tables',
    question: 'What is data quality in DLT?',
    options: [
      'Constraints that reject invalid rows and track quality metrics',
      'Manual validation',
      'Backups',
      'Row limits'
    ],
    correctAnswers: [0],
    explanation: 'DLT quality rules flag/drop invalid rows, track failures per rule, enabling data governance.',
    difficulty: 'basic'
  },
  {
    id: 'assoc-sql-001',
    level: 'associate',
    topic: 'SQL for Data Engineering',
    question: 'What is a window function in Spark SQL?',
    options: [
      'Calculates aggregate/ranking over a row partition without full group collapse',
      'SQL window property',
      'Data encryption',
      'Memory management'
    ],
    correctAnswers: [0],
    explanation: 'Window functions (ROW_NUMBER, RANK, SUM OVER) compute rolling aggregates and rankings per partition.',
    difficulty: 'intermediate'
  },
  {
    id: 'assoc-sql-002',
    level: 'associate',
    topic: 'SQL for Data Engineering',
    question: 'What is a CTE (Common Table Expression) and when is it useful?',
    options: [
      'Temporary named result set for readability and reuse within query',
      'Persistent view',
      'A table backup',
      'A schema'
    ],
    correctAnswers: [0],
    explanation: 'CTEs (WITH clause) improve query readability and enable recursive queries.',
    difficulty: 'intermediate'
  },
  {
    id: 'assoc-sql-003',
    level: 'associate',
    topic: 'SQL for Data Engineering',
    question: 'What is the difference between JOIN and UNION?',
    options: [
      'JOIN combines columns from multiple tables; UNION combines rows',
      'Same operation',
      'UNION is faster',
      'JOIN requires keys'
    ],
    correctAnswers: [0],
    explanation: 'JOIN links rows horizontally; UNION stacks rows vertically (requires same schema).',
    difficulty: 'basic'
  },
  {
    id: 'assoc-admin-001',
    level: 'associate',
    topic: 'Cluster & Compute',
    question: 'What is a Databricks cluster?',
    options: [
      'A set of compute resources (VMs) that execute Spark jobs',
      'A database server',
      'A backup location',
      'A user account'
    ],
    correctAnswers: [0],
    explanation: 'Clusters are ephemeral compute resources; can be all-purpose, job, or SQL clusters.',
    difficulty: 'basic'
  },
  {
    id: 'assoc-admin-002',
    level: 'associate',
    topic: 'Cluster & Compute',
    question: 'What is autoscaling in Databricks clusters?',
    options: [
      'Dynamically adjusting worker count based on load',
      'Manual scaling only',
      'Deleting idle clusters',
      'Fixed cluster size'
    ],
    correctAnswers: [0],
    explanation: 'Autoscaling scales workers up/down between min/max based on pending tasks, optimizing cost.',
    difficulty: 'basic'
  },

  // ============ MORE PROFESSIONAL LEVEL QUESTIONS ============
  {
    id: 'prof-perf-001',
    level: 'professional',
    topic: 'Performance Tuning',
    question: 'What is partition pruning and how does it improve query performance?',
    options: [
      'Skipping partitions that don\'t match WHERE predicates, reducing data scanned',
      'Deleting partitions',
      'Combining partitions',
      'Encrypting partitions'
    ],
    correctAnswers: [0],
    explanation: 'Partition pruning avoids reading irrelevant partitions, dramatically reducing I/O and scan time.',
    difficulty: 'advanced'
  },
  {
    id: 'prof-perf-002',
    level: 'professional',
    topic: 'Performance Tuning',
    question: 'What is predicate pushdown?',
    options: [
      'Pushing WHERE conditions into data source to filter early',
      'Sorting data',
      'Caching results',
      'Encrypting values'
    ],
    correctAnswers: [0],
    explanation: 'Pushdown moves filters close to data source (e.g., SQL WHERE in Delta read), reducing data transfer.',
    difficulty: 'advanced'
  },
  {
    id: 'prof-sec-001',
    level: 'professional',
    topic: 'Security & Governance',
    question: 'What is dynamic data masking in Unity Catalog?',
    options: [
      'Masking column values for users based on permissions',
      'Encrypting files',
      'Hiding table names',
      'Removing columns'
    ],
    correctAnswers: [0],
    explanation: 'Masking obscures sensitive data (e.g., emails, SSN) for non-privileged users automatically.',
    difficulty: 'advanced'
  },
  {
    id: 'prof-sec-002',
    level: 'professional',
    topic: 'Security & Governance',
    question: 'What is table-level ACL (Access Control List) in Databricks?',
    options: [
      'Permission settings controlling who can read/write specific tables',
      'Row-level security only',
      'Column encryption',
      'User authentication'
    ],
    correctAnswers: [0],
    explanation: 'ACLs grant USAGE, SELECT, MODIFY, ADMIN on tables; combined with row/column masking.',
    difficulty: 'advanced'
  },
  {
    id: 'prof-arch-001',
    level: 'professional',
    topic: 'Architecture',
    question: 'What is the Medallion Architecture (Bronze-Silver-Gold)?',
    options: [
      'Bronze (raw ingestion) > Silver (cleaned/deduplicated) > Gold (business aggregates)',
      'Random layering',
      'Backup strategy',
      'Hardware tier'
    ],
    correctAnswers: [0],
    explanation: 'Medallion organizes data by quality: Bronze raw, Silver cleansed, Gold curated for analytics.',
    difficulty: 'intermediate'
  },
  {
    id: 'prof-arch-002',
    level: 'professional',
    topic: 'Architecture',
    question: 'What are the benefits of a Lakehouse architecture?',
    options: [
      'Combines data lake flexibility with data warehouse ACID guarantees',
      'No benefits over data warehouse',
      'Only for machine learning',
      'Requires cloud only'
    ],
    correctAnswers: [0],
    explanation: 'Lakehouse (Delta Lake) unifies analytics/ML on raw data with enterprise governance.',
    difficulty: 'advanced'
  },
  {
    id: 'prof-ml-001',
    level: 'professional',
    topic: 'Advanced MLflow & Model Ops',
    question: 'What is a model alias in MLflow?',
    options: [
      'A named reference (e.g., "champion", "challenger") for easy model routing',
      'Model encryption',
      'Version number',
      'User name'
    ],
    correctAnswers: [0],
    explanation: 'Aliases enable easy swapping of champion/challenger models without changing serving code.',
    difficulty: 'advanced'
  },
  {
    id: 'prof-ml-002',
    level: 'professional',
    topic: 'Advanced MLflow & Model Ops',
    question: 'What is a pyfunc model in MLflow?',
    options: [
      'Python function wrapper enabling custom preprocessing/postprocessing with any framework',
      'Python script',
      'Pandas DataFrame',
      'NumPy array'
    ],
    correctAnswers: [0],
    explanation: 'PyFunc standardizes model format, allowing complex pre/post-processing logic in a single package.',
    difficulty: 'advanced'
  }
];

// Helper functions
export function getQuestionsByLevel(level: 'associate' | 'professional'): DatabricksQuestion[] {
  return databricksQuestions.filter(q => q.level === level);
}

export function getQuestionsByTopic(level: 'associate' | 'professional', topic: string): DatabricksQuestion[] {
  return databricksQuestions.filter(q => q.level === level && q.topic === topic);
}

export function getTopicsByLevel(level: 'associate' | 'professional'): string[] {
  const topics = new Set<string>();
  databricksQuestions
    .filter(q => q.level === level)
    .forEach(q => topics.add(q.topic));
  return Array.from(topics);
}
